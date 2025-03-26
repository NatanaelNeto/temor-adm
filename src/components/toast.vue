<script setup lang="ts">
import { computed } from 'vue';
import toastService, { type Toast } from '../services/toast';

const toasts = computed(() => toastService.state.toasts);

const iconName = (type: Toast['type']) => {
  if (type == "success") return 'bi-check';
  else if (type == "error") return 'oi-blocked';
  else if (type == "warning") return 'md-warning-round';
  else return 'pr-info';
}

const iconFill = (type: Toast['type']) => {
  if (type == "success") return '#7F8D75';
  else if (type == "error") return '#B97B7C';
  else if (type == "warning") return '#E4A958';
  else return '#7D99A3';
}
</script>

<template>
  <div class="toast__container">
    <div v-for="toast in toasts" :key="toast.id" :class="['toast', `toast--${toast.type}`]"
      @click="toastService.removeToast(toast.id)">
      <div :class="['toast__icon', `toast__icon--${toast.type}`]">
        <v-icon :name="iconName(toast.type)" :fill="iconFill(toast.type)" :scale="1.25" />
      </div>
      <div class="toast__text">
        <h3>{{ toast.title }}</h3>
        <p>{{ toast.message }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toast {
  display: flex;
  gap: 4px;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0px 2px 8px #00000011;
  padding: 16px;
  color: var(--gray);
  border-radius: 8px;
  animation: fadeIn 0.3s ease-out;
  width: 400px;

  &__container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
  }

  &--success {
    border-right: 4px solid var(--green);

    h3 {
      color: var(--green)
    }
  }

  &--error {
    border-right: 4px solid var(--red);

    h3 {
      color: var(--red)
    }
  }

  &--warning {
    border-right: 4px solid var(--yellow);

    h3 {
      color: var(--yellow)
    }
  }

  &--info {
    border-right: 4px solid var(--blue);

    h3 {
      color: var(--blue)
    }
  }

  &__icon {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &--success {
      background-color: color-mix(in srgb, var(--green) 50%, var(--white) 50%);
    }

    &--error {
      background-color: color-mix(in srgb, var(--red) 50%, var(--white) 50%);
    }

    &--warning {
      background-color: color-mix(in srgb, var(--yellow) 50%, var(--white) 50%);
    }

    &--info {
      background-color: color-mix(in srgb, var(--blue) 50%, var(--white) 50%);
    }
  }

  &__text {
    display: flex;
    flex-flow: column wrap;

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>