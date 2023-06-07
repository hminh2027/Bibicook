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
        New Category
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new category</ModalHeader>
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
