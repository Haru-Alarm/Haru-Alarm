import * as React from 'react'

import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    Input,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    FormLabel,
    Stack,
    PopoverCloseButton,
    useDisclosure,
    FormControl,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

import  FocusLock from "react-focus-lock"

// 1. Create a text input component
const TextInput = React.forwardRef((props, ref) => {
    return (
      <FormControl>
        <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
        <Input ref={ref} id={props.id} {...props} />
      </FormControl>
    )
  })
  
  // 2. Create the form
  const Form = ({ firstFieldRef, onCancel }) => {
    return (
      <Stack spacing={4}>
        <TextInput
          label='전화번호'
          id='first-name'
          ref={firstFieldRef}
          defaultValue='000-0000-0000'
        />
        <NumberInput defaultValue={30} min={5} max={60}>
          <NumberInputField label='sad'/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            취소
          </Button>
          <Button colorScheme='teal' onClick={onCancel}>
            알림
          </Button>
        </ButtonGroup>
      </Stack>
    )
  }
  
  // 3. Create the Popover
  // Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
  const PopoverForm = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef = React.useRef(null)
  
    return (
      <>
        <Popover
          isOpen={isOpen}
          initialFocusRef={firstFieldRef}
          onOpen={onOpen}
          onClose={onClose}
          placement='right'
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button colorScheme='pink' type='submit'>
               알림 톡
            </Button>
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <PopoverCloseButton />
              <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </>
    )
  }

export default PopoverForm
