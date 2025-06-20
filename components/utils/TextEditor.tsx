'use client';

import React from 'react';
import StarterKit from '@tiptap/starter-kit';
import TextUnderline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Heading from '@tiptap/extension-heading';

import { EditorContent, EditorProvider, useCurrentEditor } from '@tiptap/react';
import {
  Bold,
  CircleSlash,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Redo,
  Underline,
  Undo,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 justify-between bg-[var(--bg-primary-color)] p-2 rounded-t-sm">
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().setColor('#e87e25').run();
        }}
        className="bg-[#e87e25] w-6 h-6 rounded-full hover:text-gray-800 hover:opacity-80"
      ></button>
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().setColor('#2da7df').run();
        }}
        className="bg-[#2da7df] w-6 h-6 rounded-full hover:text-gray-800 hover:opacity-80"
      ></button>
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().setColor('black').run();
        }}
        className="bg-[#000000] w-6 h-6 rounded-full hover:text-gray-800 hover:opacity-80"
      ></button>
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().unsetColor().run();
        }}
        className="text-black hover:text-gray-800 hover:opacity-80"
      >
        <CircleSlash />
      </button>

      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
      >
        <Heading1 />
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        <Heading2 />
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
      >
        <Heading3 />
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().setParagraph().run();
        }}
      >
        P
      </button>

      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={cn(
          'h-8 w-8 flex justify-center items-center cursor-pointer rounded-sm',
          editor.isActive('bold')
            ? 'bg-gray-300 text-gray-800'
            : 'hover:text-gray-800 hover:bg-gray-200',
        )}
      >
        <Bold size={16} />
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={cn(
          'h-8 w-8 flex justify-center items-center cursor-pointer rounded-sm',
          editor.isActive('italic')
            ? 'bg-gray-300 text-gray-800'
            : 'hover:text-gray-800 hover:bg-gray-200',
        )}
      >
        <Italic size={16} />
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().toggleUnderline().run();
        }}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={cn(
          'h-8 w-8 flex justify-center items-center cursor-pointer rounded-sm',
          editor.isActive('underline')
            ? 'bg-gray-300 text-gray-800'
            : 'hover:text-gray-800 hover:bg-gray-200',
        )}
      >
        <Underline size={18} />
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().undo().run();
        }}
        disabled={!editor.can().chain().focus().undo().run()}
        className={cn(
          'h-8 w-8 p-1 flex justify-center items-center rounded-sm',
          editor.can().chain().focus().undo().run()
            ? 'bg-gray-300 text-gray-800 cursor-pointer'
            : '',
        )}
      >
        <Undo size={22} />
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          editor.chain().focus().redo().run();
        }}
        disabled={!editor.can().chain().focus().redo().run()}
        className={cn(
          'h-8 w-8 p-1 flex justify-center items-center rounded-sm',
          editor.can().chain().focus().redo().run()
            ? 'bg-gray-300 text-gray-800 cursor-pointer'
            : '',
        )}
      >
        <Redo size={22} />
      </button>
    </div>
  );
};

function MyEditorContent({ content }: { content: string }) {
  const { editor } = useCurrentEditor();

  React.useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) return null;

  return <EditorContent editor={editor} />;
}

export default function TextEditor({
  content,
  readOnly = false,
  className,
  onChange,
}: {
  content: string;
  readOnly?: boolean;
  className?: string;
  onChange?: (content: string) => void;
}) {
  return (
    <div className={cn('w-full flex flex-col cursor-text editor', className)}>
      <EditorProvider
        editable={!readOnly}
        slotBefore={!readOnly && <MenuBar />}
        extensions={[
          StarterKit,
          TextStyle,
          Color,
          Heading.configure({
            levels: [1, 2, 3],
          }),
          TextUnderline,
        ]}
        onUpdate={({ editor }) => {
          if (!readOnly) {
            const htmlContent = editor.getHTML();
            if (onChange) {
              onChange(htmlContent);
            }
          }
        }}
        content={content}
      >
        <MyEditorContent content={content} />
      </EditorProvider>
    </div>
  );
}
