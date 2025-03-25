<script setup>
import { ref } from 'vue';


const username = ref('');
const password = ref('');
</script>

<template>
  <form action="" class="login">
    <div class="login__group login__group--error">
      <label for="username">Usuário</label>
      <input v-model="username" type="text">
    </div>
    <div class="login__group">
      <label for="username">Senha</label>
      <input v-model="password" type="password">
    </div>
    <button type="submit" class="login__button">
      Login
    </button>
  </form>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--white);
  box-shadow: 0px 2px 8px #00000011;

  &__group {
    display: flex;
    flex-flow: column;
    gap: 2px;
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 20px;
    }

    label {
      font-size: 12px;
      color: var(--gray);
    }

    input {
      border: none;
      outline: none;
      padding: 12px 16px;
      border-radius: 4px;
      color: var(--black);
      background: none;
      border-bottom: solid 2px var(--green);
      font-size: 16px;

      &:focus {
        box-shadow: 0px 2px 8px #00000011;
      }
    }

    &--error {
      label {
        color: var(--red);
      }

      input {
        border-bottom-color: var(--red);
        color: var(--red);
      }
    }
  }

  &__button {
    outline: none;
    border: none;
    border-radius: 8px;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--green);
    color: var(--white);
    font-size: 16px;
  }
}
</style>