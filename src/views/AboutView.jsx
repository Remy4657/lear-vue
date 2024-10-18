import { defineComponent, ref } from 'vue';
import { onMounted } from "vue";

// This function will be called once when the component is mounted (page reload)
const callOnceOnReload = () => {
  console.log("Page reloaded, function called once!");
};

// Call the function inside the `onMounted` lifecycle hook
onMounted(() => {
  callOnceOnReload();
});
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