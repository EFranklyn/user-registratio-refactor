
<template >
    <Loading  v-if="loading"/>
    <FormContainer 
    id="formUser" v-else>
      <h2>User</h2>
      <form @submit.prevent="handleSubmit">
        <FormGroup>
          <Label for="nome">Name:</Label>
          <Input type="text" id="nome" v-model="formData.nome" />
          <ValidationMessage v-if="showValidationMessage.nome">Please fill in the name.</ValidationMessage>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name:</Label>
          <Input type="text" id="lastName" v-model="formData.lastName" />
          <ValidationMessage v-if="showValidationMessage.lastName">Please fill in the last name.</ValidationMessage>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input type="email" id="email" v-model="formData.email" />
          <ValidationMessage v-if="showValidationMessage.email">Please fill in the email.</ValidationMessage>
        </FormGroup>
        <FormGroupActions>
          <ButtonSubmit :disabled="loading" type="submit">
            {{ loading ? 'Enviando...' : 'Enviar' }}
          </ButtonSubmit>
          <CloseButton @click="closeForm">Close</CloseButton>
        </FormGroupActions>
      </form>
    </FormContainer>
</template>

<script setup>
    import { ref } from 'vue';
    import { z } from 'zod';
    import { FormContainer, FormGroup, Label, Input, ButtonSubmit, FormGroupActions, CloseButton, ValidationMessage } from './styles.ts';
    import { useRouter } from "vue-router";
    import Loading from '../Loading.vue';
    console.log('start component user')

    const routerManager = useRouter();  
    const schema = z.object({
        lastName: z.string().regex(/^[^\d\W_]+$/).min(1),
        email: z.string().email(),
        nome: z.string().regex(/^[A-Za-z]+$/i, "Only letters are allowed").min(1, 'Please fill in the name.')
    });

  
    const formData = ref({
    nome: '',
    lastName: '',
    email: '',
    });

  const showValidationMessage = ref({
      nome: false,
      lastName: false,
      email: false,
      global: false,
    });
  
  let loading = ref(false);
  
  const handleSubmit = async () => {
    schema.safeParse(formData)
    console.log(schema.safeParse('test'), '>>>>')
    console.log(schema.parse(formData.value), '<<<<')

    showValidationMessage.value = {
        nome: !formData.value.nome,
        lastName: !formData.value.lastName,
        email: !formData.value.email,
        global: false,
    };
    
    if (showValidationMessage.value.nome || showValidationMessage.value.lastName || showValidationMessage.value.email) {
        showValidationMessage.value.global = true;
        return;
    }
    try {
      const validatedData = schema.parse(formData.value);
      loading.value = true;
      console.log('Dados do formulário:', validatedData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      loading.value = false;
    } catch (error) {
      console.error('Erro ao validar os dados:', error);
    }
  };
  
  const closeForm = () => {
    routerManager.back()      
  };
  </script>

  