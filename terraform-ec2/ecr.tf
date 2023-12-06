resource "aws_ecrpublic_repository" "foo" {
  name                 = "authsure"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}
