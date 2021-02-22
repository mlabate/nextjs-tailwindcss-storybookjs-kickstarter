const Article = (_, res) => {
    res.statusCode = 200
    res.json({
      id: 1,
      author: 'TheWrongThinkingDude',
      company: 'Chameleon Tech',
      image_url: 'https://images.unsplash.com/photo-1594327952436-928a592ad421?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
    })
  }
  
  export default Article