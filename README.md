# AWS-EventDrivenArchSolution

A hands-on project to implement an Event Driven Architecture solution using NodeJS/ExpressJS and AWS services (SNS, SQS, Lambda, and S3)

## Order Server

A microservice that will receive and store the order and send it to SNS

### Run using Docker Compose

```sh
docker-compose up -d
```

### TODO

- Send Event to SNS
- Validation
- Monitoring
- Logging
- Tests

## SNS

### TODO

- Distribute trafic - BRT / US / Europe queues

## SQS

### TODO

- Create BRT / US / Europe queues

## Lambda

### TODO

- Read queue
- Confirm payment
- Store order in S3

## S3

### TODO

- Create S3 to store orders