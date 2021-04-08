import { ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK, ELEMENT_PARAGRAPH, ELEMENT_TD, ELEMENT_TODO_LI, ExitBreakPluginOptions, isBlockAboveEmpty, isSelectionAtBlockStart, KEYS_HEADING, ResetBlockTypePluginOptions, SlatePluginOptions, SoftBreakPluginOptions } from "@udecode/slate-plugins";

export const optionsSoftBreakPlugin = (options: Record<string, SlatePluginOptions>): SoftBreakPluginOptions =>  ({
  rules: [
    { hotkey: 'shift+enter' },
    {
      hotkey: 'enter',
      query: {
        allow: [
          options[ELEMENT_CODE_BLOCK].type,
          options[ELEMENT_BLOCKQUOTE].type,
          options[ELEMENT_TD].type,
        ],
      },
    },
  ],
});

export const optionsExitBreakPlugin = (options: Record<string, SlatePluginOptions>): ExitBreakPluginOptions => ({
  rules: [
    {
      hotkey: 'mod+enter',
    },
    {
      hotkey: 'mod+shift+enter',
      before: true,
    },
    {
      hotkey: 'enter',
      query: {
        start: true,
        end: true,
        allow: KEYS_HEADING,
      },
    },
  ],
});


const resetBlockTypesCommonRule =  (options: Record<string, SlatePluginOptions>) => ({
  types: [options[ELEMENT_BLOCKQUOTE].type, options[ELEMENT_TODO_LI].type],
  defaultType: options[ELEMENT_PARAGRAPH].type,
});

export const optionsResetBlockTypePlugin = (options: Record<string, SlatePluginOptions>): ResetBlockTypePluginOptions => ({
  rules: [
    {
      ...resetBlockTypesCommonRule(options),
      hotkey: 'Enter',
      predicate: isBlockAboveEmpty,
    },
    {
      ...resetBlockTypesCommonRule(options),
      hotkey: 'Backspace',
      predicate: isSelectionAtBlockStart,
    },
  ],
});
