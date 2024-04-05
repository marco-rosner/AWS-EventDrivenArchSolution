import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns"
import { fromUtf8 } from "@aws-sdk/util-utf8-node";

const s3Client = new S3Client({
    region: process.env.S3_REGION
});
const snsClient = new SNSClient({
    region: process.env.SNS_REGION
})

const storeOrderInS3 = async (order) => {
    var command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: `${order.id}.json`,
        Body: fromUtf8(JSON.stringify(order)) // Convert from JSON to Buffer
    })

    try {
        const data = await s3Client.send(command)

        console.log('S3 object upload successfully ', data)
    } catch (err) {
        console.error(err, err.stack)
    }
}

const sendConfirmationEmail = async (orderId) => {
    const snsCommand = new PublishCommand({
        TopicArn: process.env.CONFIRMATION_TOPIC,
        Message: `Order ${orderId} was successfully processed!`
    })
    await snsClient.send(snsCommand)
}

export const handler = async (event) => {
    // Read SQS queue
    for (const { body } of event.Records) {
        // Get SNS body
        const bodyParsed = JSON.parse(body)
        // Get Order
        const order = JSON.parse(bodyParsed.Message)

        await storeOrderInS3(order)

        await sendConfirmationEmail(order.id)
    }

    return { statusCode: 202 }
};
