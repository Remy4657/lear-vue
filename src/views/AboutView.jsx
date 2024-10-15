import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);
    
    return () => (
      <div>
        <button onClick={() => count.value++}>
          You clicked meeee {count.value} times.
        </button>
      </div>
    );
  }
});