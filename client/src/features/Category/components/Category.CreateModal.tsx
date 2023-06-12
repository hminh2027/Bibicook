import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import CategoryCreateForm from "./Category.CreateForm";

function CategoryCreateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        Thêm
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tạo danh mục</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CategoryCreateForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CategoryCreateModal;
