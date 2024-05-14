import MarkdownIt from 'markdown-it';
import MarkdownItLinkAttributes from 'markdown-it-link-attributes';

const md = new MarkdownIt();

md.use(MarkdownItLinkAttributes, {
  attrs: {
    class:
      'underline underline-offset-4 hover:decoration-transparent text-blue hover:text-gray-900',
  },
});

const markdown = (text, inline = false) =>
  inline ? md.renderInline(text) : md.render(text);

export default markdown;
