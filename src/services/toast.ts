import { reactive } from "vue";

export interface Toast {
  id: number;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
}

const state = reactive<{ toasts: Toast[] }>({ toasts: [] });

const TOAST_TIME = 3000;

const callToast = (type: Toast["type"], title: string, message: string) => {
  const id = Date.now();
  state.toasts.push({ id, type, title, message });

  setTimeout(() => {
    removeToast(id);
  }, TOAST_TIME);
};

const removeToast = (id: number) => {
  state.toasts = state.toasts.filter((toast) => toast.id !== id);
}

export default {
  state,
  callToast,
  removeToast,
}