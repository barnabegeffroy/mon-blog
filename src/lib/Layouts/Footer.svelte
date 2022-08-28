<script>
  export let content
</script>

<footer>
  <p>
    <a href="https://github.com/barnabegeffroy/mon-blog" target="_blank"
      >{content}</a
    >
  </p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    margin-top: auto;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
