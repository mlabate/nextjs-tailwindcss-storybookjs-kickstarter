const Article = (_, res) => {
    res.statusCode = 200
    res.json({
      id: 1,
      author: 'TheWrongThinkingDude',
      company: 'Chameleon Tech',
      image_url: 'https://images.unsplash.com/photo-1594327952436-928a592ad421',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
    })
  }
  
  export default Article