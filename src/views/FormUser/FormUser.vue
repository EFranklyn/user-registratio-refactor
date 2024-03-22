<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { z } from 'zod';
import { useRouter } from "vue-router";
import Loading from '../../components/Loading.vue';

console.log('start component user')

const router = useRouter();

interface MessageError {
  name: string;
  lastName: string;
  email: string;
};

interface User {
  name: string,
  lastName: string,
  email: string,
};

const schema = z.object({
  lastName: z.string().min(1, 'Please fill in the Last Name.').regex(/^[A-Za-z][A-Za-z\s]*$/, "Only letters are allowed"),
  email: z.string().email(),
  name: z.string().min(1, 'Please fill in the name.').regex(/^[A-Za-z][A-Za-z\s]*$/, "Only letters are allowed")
});

const formData = ref<User>({
  name: '',
  lastName: '',
  email: '',
});

const errorsDisplay = reactive<MessageError>({
  name: '',
  lastName: '',
  email: ''
});

let loading = ref(false);

const handleSubmit = async (): Promise<void> => {
  try {
    const validatedData = schema.safeParse(formData.value);
    errorsDisplay.name = ''
    errorsDisplay.lastName = ''
    errorsDisplay.email = ''
    if (!validatedData.success) {
      const errorsFormated = validatedData.error.format();
      errorsDisplay.name = errorsFormated.name?._errors[0] || '';
      errorsDisplay.lastName = errorsFormated.lastName?._errors[0] || '';
      errorsDisplay.email = errorsFormated.email?._errors[0] || '';
      return
    };
    loading.value = true;
    console.log('Dados do formulário:', validatedData);

    await new Promise((resolve, reject) => setTimeout(reject, 2000))
      .then((resolve) => console.log('resolvida', resolve))
      .catch((error) => console.log('rejeitada', error));

    loading.value = false;
  } catch (error) {
    console.error('Erro ao validar os dados:', error);
  }
};

const closeForm = (): void => {
  router.back();
};
</script>

<template>
  <Loading v-if="loading" />
  <div class="form-container" id="formUser" v-else>
    <h2>User</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label class="label" for="name">Name:</label>
        <input class="imput" id="name" v-model="formData.name" />
        <p class="validation-message" v-if="Boolean(errorsDisplay?.name)">{{ errorsDisplay?.name }}</p>
      </div>
      <div class="form-group">
        <label class="label" for="lastName">Last Name:</label>
        <input class="imput" type="text" id="lastName" v-model="formData.lastName" />
        <p class="validation-message" v-if="Boolean(errorsDisplay?.lastName)">{{ errorsDisplay?.lastName }}</p>
      </div>
      <div class="form-group">
        <label class="label" for="email">Email:</label>
        <input class="imput" type="email" id="email" v-model="formData.email" />
        <p class="validation-message" v-if="Boolean(errorsDisplay?.email)">{{ errorsDisplay?.email }}</p>
      </div>
      <div class="form-group-actions">
        <button class="button-submit" :disabled="loading" type="submit">
          {{ loading ? 'Enviando...' : 'Enviar' }}
        </button>
        <button class="close-button" @click="closeForm">Close</button>
      </div>
    </form>
  </div>
</template>

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