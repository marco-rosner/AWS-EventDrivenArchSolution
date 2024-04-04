# AWS-EventDrivenArchSolution

A hands-on project to implement an Event Driven Architecture solution using NodeJS/ExpressJS and AWS services (SNS, SQS, Lambda, and S3)

## Order Server

A microservice that will receive and store the order and send it to SNS

### Run using Docker Compose

```sh
docker-compose up -d
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

### TODO

- Read queue
- Confirm payment
- Store order in S3

## S3

### TODO

- Create S3 to store orders