import { defineComponent } from "vue";

const Comp = defineComponent(
  () => {
    return () => <div>hello</div>;
  },
  {
    props: {
      foo: String,
    },
  }
);

export default defineComponent(() => {
  return () => (
    <>
      <div vLoading={true}></div>
      <Comp vPermission={true}></Comp>
    </>
  );
});
