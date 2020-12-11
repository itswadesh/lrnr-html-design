<template>
  <div class="container mx-auto mt-20">
    <!-- <InternshalaModal /> -->
    <button class="material-button">Button</button>
    <button class="material-button-text">Text Button</button>
    <label class="material-checkbox">
      <input type="checkbox" />
      <span>Checkbox</span>
    </label>
    <!-- Radio -->
    <label class="material-radio">
      <input type="radio" name="group" />
      <span>Radio Option 1</span>
    </label>
    <br />
    <br />
    <label class="material-radio">
      <input type="radio" name="group" />
      <span>Radio Option 2</span>
    </label>

    <progress class="material-progress-circular" />
    <progress id="file" value="50" max="100"> 32% </progress>
    <label class="material-textbox-outlined">
      <input placeholder=" " />
      <span>Textfield</span>
    </label>
    <label class="material-textbox-outlined">
      <textarea placeholder=" " class="w-full" rows="5" />
      <span>Textarea</span>
    </label>
  </div>
</template>

<script>
export default {
  layout: 'none'
}
</script>

<style></style>
