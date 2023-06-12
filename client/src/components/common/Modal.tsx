import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  Box,
} from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props extends ModalProps {
  title: ReactNode | string;
}
const Modal = ({ isOpen, onClose, children, title }: Props) => {
  const modalTitle = title && (
    <>
      <div className="border-b border-b-[hsl(210,23%,95%)] p-4 font-bold text-xl">
        {title}
      </div>
    </>
  );
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          sx={{
            padding: 0,
          }}
        >
          {modalTitle}
          <Box
            sx={{
              padding: 4,
            }}
          >
            {children}
          </Box>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
export default Modal;
