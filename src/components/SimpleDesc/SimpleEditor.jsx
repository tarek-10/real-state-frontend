import { useRef, useEffect, useCallback } from "react";
import "./SimpleEditor.scss";

function SimpleEditor({ value, onChange }) {
  const editorRef = useRef(null);
  const isInternalChange = useRef(false);
  const selectionRef = useRef(null);

  // حفظ المؤشر قبل التغيير
  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      selectionRef.current = selection.getRangeAt(0);
    }
  };

  // استعادة المؤشر بعد التغيير
  const restoreSelection = () => {
    if (selectionRef.current && editorRef.current) {
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(selectionRef.current);
    }
  };

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      saveSelection();
      isInternalChange.current = true;
      editorRef.current.innerHTML = value;
      isInternalChange.current = false;
      restoreSelection();
    }
  }, [value]);

  const handleInput = useCallback(() => {
    if (!isInternalChange.current) {
      saveSelection();
      onChange(editorRef.current.innerHTML);
    }
  }, [onChange]);

  const format = useCallback(
    (command, value = null) => {
      saveSelection();
      editorRef.current.focus();
      document.execCommand(command, false, value);
      restoreSelection();

      // تحديث القيمة بعد التنسيق
      onChange(editorRef.current.innerHTML);
    },
    [onChange],
  );

  return (
    <div className="simple-editor">
      <div className="toolbar">
        <button
          type="button"
          onClick={() => format("bold")}
          onMouseDown={(e) => e.preventDefault()}
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => format("italic")}
          onMouseDown={(e) => e.preventDefault()}
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => format("insertUnorderedList")}
          onMouseDown={(e) => e.preventDefault()}
          title="Bullet List"
        >
          • List
        </button>
      </div>

      <div
        ref={editorRef}
        className="editor-area"
        contentEditable
        onInput={handleInput}
        suppressContentEditableWarning={true}
      />
    </div>
  );
}

export default SimpleEditor;
