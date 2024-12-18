module.exports = {
  run: [
    {
      method: "fs.copy",
      params: {
        src: "web",
        dest: "{{kernel.path('web')}}",
        options: {
          recursive: true
        }
      }
    },
  ]
}
