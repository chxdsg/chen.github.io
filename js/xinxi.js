// script.js  
function editInfo(button) {  
    // 假设我们简单地切换编辑状态，实际应用中可能需要更复杂的逻辑  
    const row = button.closest('tr');  
    const cells = row.querySelectorAll('td:not(:last-child)'); // 排除操作按钮所在的单元格  
  
    // 这里仅作为演示，实际可能需要一个模态框或输入框来真正编辑  
    cells.forEach(cell => {  
        if (cell.textContent === '张三') {  
            cell.textContent = '李四'; // 示例：将姓名改为李四  
        }  
    });  
  
    // 在真实场景中，这里可能会显示一个编辑表单，隐藏按钮，并在表单提交后恢复  
}