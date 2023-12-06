resource "aws_ecrpublic_repository" "foo" {
  provider = aws.us_east_1
  repository_name      = "authsure"
}
