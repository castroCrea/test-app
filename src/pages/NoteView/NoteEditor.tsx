import 'tippy.js/dist/tippy.css';
import React, { useMemo } from 'react';
import {
  createAlignPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createDeserializeHTMLPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createImagePlugin,
  createItalicPlugin,
  createKbdPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createNormalizeTypesPlugin,
  createParagraphPlugin,
  createReactPlugin,
  createSelectOnBackspacePlugin,
  createSlatePluginsOptions,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  ELEMENT_H1,
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  SlatePlugin,
  SlatePlugins,
  TDescendant,
} from '@udecode/slate-plugins';

const defaultOptions = createSlatePluginsOptions();

export const NoteEditor = ({
  title, content, onChange
}: {title?: string, content?: TDescendant[], onChange: (value: TDescendant[]) => void}) => {

  const initialValue = [{
    type: ELEMENT_H1,
    children: [
      {
        text: title || '',
      },
    ],
  }, ...(content || [])]


  const pluginsMemo: SlatePlugin[] = useMemo(() => {
    const plugins = [
      createReactPlugin(),
      createHistoryPlugin(),
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createAlignPlugin(),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createNormalizeTypesPlugin({
        rules: [{ path: [0, 0], strictType: defaultOptions[ELEMENT_H1].type }],
      }),
      createTrailingBlockPlugin({
        type: defaultOptions[ELEMENT_PARAGRAPH].type,
        level: 1,
      }),
      createSelectOnBackspacePlugin({ allow: defaultOptions[ELEMENT_IMAGE].type }),
    ];

    plugins.push(createDeserializeHTMLPlugin({ plugins }));

    return plugins;
  }, []);

  return (
    <SlatePlugins
      plugins={pluginsMemo}
      options={defaultOptions}
      initialValue={initialValue}
      editableProps={{ placeholder: 'Enter some text...'}}
      onChange={value => onChange(value)}
    >
    </SlatePlugins>
  );
};

export default NoteEditor;