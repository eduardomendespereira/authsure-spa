terraform {
  backend "s3" {
    bucket         = "terraform-state"
    key            = "terraform2.tfstate"
    region         = "us-east-1"
    encrypt        = false
    dynamodb_table = "lock-table-name"
  }
}
