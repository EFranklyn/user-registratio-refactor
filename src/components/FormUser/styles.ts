import styled from 'vue3-styled-components';

export const FormContainer = styled.div`
    max-width: 100%;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 90%;  
    align-items: baseline;
    margin-bottom: 10px;
`;

export const FormGroupActions = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 90%;  
    align-items: center;
    margin-bottom: 10px;
    padding: 15px 20px 0 20px;
`;

export const Label = styled.label`
    display: block;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
`;

export const ButtonSubmit = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background-color: ${(props: { disabled?: boolean }) => (props.disabled ? '#ccc' : '#007bff')};
    color: #fff;
    border: none;
    cursor: ${(props: { disabled?: boolean }) => (props.disabled ? 'not-allowed' : 'pointer')};

`;

export const CloseButton = styled.button`
    width: 80%;
    padding: 5px;
    font-size: 16px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    text-align: center;
`;


export const ValidationMessage = styled.p`
    font-size: 12px;
    color: #d32f2f;
    margin: 0;    
`;
