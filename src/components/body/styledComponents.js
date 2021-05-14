import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const TodoHeading = styled.div`
${tw`flex justify-between m-5`}`;

const CreateButton = styled.button`
${tw`h-5 w-28`}`

const TodoInput = styled.input`
${tw`h-8 w-48 m-5`}`

const EachTodo = styled.div`
${tw`flex items-center w-20 justify-between h-10 m-5`}`


export { TodoHeading, CreateButton, TodoInput, EachTodo }