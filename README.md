# AWS-EventDrivenArchSolution

A hands-on project to implement an Event Driven Architecture solution using NodeJS/ExpressJS and AWS services (SNS, SQS, Lambda, and S3)

## Order Server

A microservice that will receive and store the order and send it to SNS

### Run using Docker Compose

```sh
docker-compose up -d
```

### Run in standalone mode

Run the MongoDB image
```sh
docker run --network="host" --rm -p 27017:27017 mongo
```

Run Order Server
```sh
cd order-server && yarn start
```

### TODO

- Validation
- Monitoring
- Logging
- Tests

## SNS

There are three topics to distribute the traffic based in the regions (Latam, US and Euro). To check the configuration, access the order-sns folder.

## SQS

There are three queues (Latam, US and Euro) that will be responsible to store temporary the message before the apropriated lambda function could consume and remove the message. To check the configuration, access the order-sqs folder.

## Lambda

The lambda function receives all the messages from the SQS (Latam, US and Euro), store the orders in the S3 and send a confirmation email through SNS.

## S3

S3 was created to store all the orders, in json format, as a transaction receipt.