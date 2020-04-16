import App from './App.svelte';
import './tailwind.css';

const app = new App({
  target: document.body,
  props: {
    title: 'WN Reading List'
  }
});

export default app;
