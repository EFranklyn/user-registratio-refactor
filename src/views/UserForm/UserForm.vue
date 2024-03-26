<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from "vue-router";
import Loading from '../../components/Loading.vue';
import { userSchema, User } from '../../models/User';

onMounted(() => {
  console.log('start component user')
})

const router = useRouter();

interface UserErrors extends Partial<User> { }

const user = ref<User>({
  name: '',
  lastName: '',
  email: '',
});

const errors = reactive<UserErrors>({
  name: '',
  lastName: '',
  email: ''
});

const loading = ref(false);

const validatedUser = (userValidated: any): Boolean => {
  if (!userValidated?.success) {
    const errorsFormated = userValidated?.error.format();
    errors.name = errorsFormated.name?._errors[0] || '';
    errors.lastName = errorsFormated.lastName?._errors[0] || '';
    errors.email = errorsFormated.email?._errors[0] || '';
    return true
  };
  return false
};

const clearErrors = (): void => {
  errors.name = ''
  errors.lastName = ''
  errors.email = ''
}

const onSubmit = async (): Promise<void> => {
  try {
    const validatedData = userSchema.safeParse(user.value);
    if (validatedUser(validatedData))
      return

    loading.value = true;
    console.log('Form data:', validatedData);

    await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      .then((resolve) => { })
      .catch((error) => { });

    clearErrors()
    loading.value = false;
  } catch (error) {
    console.error('incorrect data:', error);
  }
};

const handleBack = (): void => {
  router.back();
};
</script>

<template>
  <Loading v-if="loading" />
  <div v-else class="form-container">
    <h2>User</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label class="label" for="name">Name:</label>
        <input class="input" id="name" v-model="user.name" />
        <p class="validation-message" v-if="Boolean(errors.name)">{{ errors.name }}</p>
      </div>
      <div class="form-group">
        <label class="label" for="lastName">Last Name:</label>
        <input class="input" type="text" id="lastName" v-model="user.lastName" />
        <p class="validation-message" v-if="Boolean(errors.lastName)">{{ errors.lastName }}</p>
      </div>
      <div class="form-group">
        <label class="label" for="email">Email:</label>
        <input class="input" type="email" id="email" v-model="user.email" />
        <p class="validation-message" v-if="Boolean(errors.email)">{{ errors.email }}</p>
      </div>
      <div class="form-group-actions">
        <button class="button-submit" :disabled="loading" type="submit">
          Submit
        </button>
        <button class="close-button" @click="handleBack">Back</button>
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
    font-weight: bold;
  }

  .input {
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