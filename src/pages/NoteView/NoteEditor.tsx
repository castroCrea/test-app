import 'tippy.js/dist/tippy.css';
import React, { useMemo } from 'react';
import {
  createAlignPlugin,
  createBlockquotePlugin,
  createAutoformatPlugin,
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
  BalloonToolbar,
  ToolbarMark,
  useSlatePluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  createSlatePluginsComponents,
  createSoftBreakPlugin,
  createExitBreakPlugin,
  createResetNodePlugin,
} from '@udecode/slate-plugins';
import { optionsAutoformat } from './editorConfig/optionsAutoformat';
import { optionsSoftBreakPlugin, optionsExitBreakPlugin, optionsResetBlockTypePlugin } from './editorConfig/optionsExist';

const defaultOptions = createSlatePluginsOptions();
const defaultComponents = createSlatePluginsComponents();

export const BallonToolbarMarks = () => {
  const arrow = false;
  const theme = 'dark';
  const direction = 'top';
  const hiddenDelay = 0;

  return (
    <BalloonToolbar
      direction={direction}
      hiddenDelay={hiddenDelay}
      theme={theme}
      arrow={arrow}
    >
      <ToolbarMark
        type={useSlatePluginType(MARK_BOLD)}
        icon={<p>B</p>}
      />
      <ToolbarMark
        type={useSlatePluginType(MARK_ITALIC)}
        icon={<p>I</p>}
      />
      <ToolbarMark
        type={useSlatePluginType(MARK_UNDERLINE)}
        icon={<p>U</p>}
      />
    </BalloonToolbar>
  );
};

export const NoteEditor = ({
  title, content, onChange
}: {title?: string, content?: TDescendant[], onChange: (value: TDescendant[]) => void}) => {

  const initialValue = [ ...(content || [{
    type: ELEMENT_H1,
    children: [
      {
        text: title || '',
      },
    ],
  },{
    type: ELEMENT_PARAGRAPH,
    children: [
      {
        text: title || '',
      },
    ],
  }])]

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
      createAutoformatPlugin(optionsAutoformat(defaultOptions)),
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
      createResetNodePlugin(optionsResetBlockTypePlugin(defaultOptions)),
      createSoftBreakPlugin(optionsSoftBreakPlugin(defaultOptions)),
      createExitBreakPlugin(optionsExitBreakPlugin(defaultOptions)),
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
      components={defaultComponents}
      options={defaultOptions}
      initialValue={initialValue}
      editableProps={{ placeholder: 'Enter some text...'}}
      onChange={value => onChange(value)}
    >
      <BallonToolbarMarks />
    </SlatePlugins>
  );
};

export default NoteEditor;