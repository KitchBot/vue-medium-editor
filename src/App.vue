<template>
  <div style="margin:20vw; border: 1px solid gray;">
    <vue-medium-editor
      v-model="text"
      :options="options"
      />
  </div>
</template>
    
<script>
import VueMediumEditor from './index.js'


export default {
  name: 'app',
  components: {
    VueMediumEditor
  },
  data: function() {
    return {
      text: 'foo <b>bar</b>',
      options: {
        buttonLabels: 'material',

        toolbar: {
          buttons: [
            ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'pre', 'quote'],
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'fontname', 'fontsize'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'outdent', 'indent', 'orderedlist', 'unorderedlist'],
            ['anchor', 'removeFormat'],
          ],
        },
        anchor: {
          linkValidation: true,
          targetCheckbox: true,
        }
        
      }
    }
  }
}
</script>

