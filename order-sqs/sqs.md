## Order SQS

There is three queues: Orders-Latam, Orders-US, Orders-Euro

### Order-Latam queue

```
{
  "Version": "2012-10-17",
  "Id": "__default_policy_ID",
  "Statement": [
    {
      "Sid": "__owner_statement",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::842019655683:root"
      },
      "Action": "SQS:*",
      "Resource": "arn:aws:sqs:us-east-2:842019655683:Orders-Latam"
    },
    {
      "Sid": "topic-subscription-arn:aws:sns:us-east-2:842019655683:Order-Latam",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "SQS:SendMessage",
      "Resource": "arn:aws:sqs:us-east-2:842019655683:Orders-Latam",
      "Condition": {
        "ArnLike": {
          "aws:SourceArn": "arn:aws:sns:us-east-2:842019655683:Order-Latam"
        }
      }
    }
  ]
}
```

### Order-US queue

```
{
  "Version": "2012-10-17",
  "Id": "__default_policy_ID",
  "Statement": [
    {
      "Sid": "__owner_statement",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::842019655683:root"
      },
      "Action": "SQS:*",
      "Resource": "arn:aws:sqs:us-east-2:842019655683:Orders-US"
    },
    {
      "Sid": "topic-subscription-arn:aws:sns:us-east-2:842019655683:Order-US",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "SQS:SendMessage",
      "Resource": "arn:aws:sqs:us-east-2:842019655683:Orders-US",
      "Condition": {
        "ArnLike": {
          "aws:SourceArn": "arn:aws:sns:us-east-2:842019655683:Order-US"
        }
      }
    }
  ]
}
```

### Order-Euro queue

```
{
  "Version": "2012-10-17",
  "Id": "__default_policy_ID",
  "Statement": [
    {
      "Sid": "__owner_statement",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::842019655683:root"
      },
      "Action": "SQS:*",
      "Resource": "arn:aws:sqs:us-east-2:842019655683:Orders-Euro"
    },
    {
      "Sid": "topic-subscription-arn:aws:sns:us-east-2:842019655683:Order-Euro",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "SQS:SendMessage",
      "Resource": "arn:aws:sqs:us-east-2:842019655683:Orders-Euro",
      "Condition": {
        "ArnLike": {
          "aws:SourceArn": "arn:aws:sns:us-east-2:842019655683:Order-Euro"
        }
      }
    }
  ]
}
```