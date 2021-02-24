import Article from '../pages/index';

const articleMock = {
    id: 3,
    author: 'TheWrongThinkingDude',
    company: 'Chameleon Tech',
    image_url: 'https://images.unsplash.com/photo-1595365066790-6371be5d4d32',
    content: 'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
}

const Story = (props) => <Article {...props} />

// Here we export a variant of the default template passing props
export const ArticleStory = Story.bind({})
ArticleStory.args = {
  article: articleMock,
};

// Here we export a variant of the default template passing props
export const EmptyArticleStory = Story.bind({})
EmptyArticleStory.args = {
  article: null,
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Article',
  component: Article,
  argTypes: {
    showImage: { control: 'boolean' },
  },
};