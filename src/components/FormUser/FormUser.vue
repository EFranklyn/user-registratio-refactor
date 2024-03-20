<script lang="ts" setup>
import { ref } from 'vue';
import { z } from 'zod';
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

const handleSubmit = async (): Promise<void> => {
  schema.safeParse(formData)
  console.log(schema.safeParse('test'), '>>>>')
  // console.log(schema.parse(formData.value), '<<<<')

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
<style lang="scss" scoped>
.form-group {
  display: flex;
  flex-direction: column;
  max-width: 90%;  
  align-items: baseline;
  margin-bottom: 10px;

  .label {
    display: block;
    font-weight: bold;
  }

  .imput {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
}
.form-group-actions {
  display: flex;
  flex-direction: column;
  max-width: 90%;  
  align-items: center;
  margin-bottom: 10px;
  padding: 15px 20px 0 20px;
}

.button-submit {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  &[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
  }
}

.close-button {
  width: 80%;
  padding: 5px;
  font-size: 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
}

.form-container {
  max-width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.validation-message {
  font-size: 12px;
  color: #d32f2f;
  margin: 0;    
}
</style>
<template>
<Loading  v-if="loading"/>
<div class="form-container" 
  id="formUser" v-else>
  <h2>User</h2>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label class="label" for="nome">Name:</label>
      <input class="imput" id="nome" v-model="formData.nome" />
      <p class="validation-message" v-if="showValidationMessage.nome">Please fill in the name.</p>
    </div>
    <div class="form-group">
      <label class="label" for="lastName">Last Name:</label>
      <input class="imput" type="text" id="lastName" v-model="formData.lastName" />
      <p class="validation-message" v-if="showValidationMessage.lastName">Please fill in the last name.</p>
    </div>
    <div class="form-group">
      <label class="label" for="email">Email:</label>
      <input class="imput" type="email" id="email" v-model="formData.email" />
      <p class="validation-message" v-if="showValidationMessage.email">Please fill in the email.</p>
    </div>
    <div class="form-group-actions">
      <button class="button-submit" :disabled="loading" type="submit">
        {{ loading ? 'Enviando...' : 'Enviar' }}
      </button >
      <button class="close-button" @click="closeForm">Close</button>
    </div>
  </form>
</div>
</template>

  