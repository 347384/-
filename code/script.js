// 处理课程的逻辑
document.getElementById('course-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // 获取表单数据
  const courseName = document.getElementById('course-name').value;
  const courseDay = document.getElementById('course-day').value;
  const startTime = document.getElementById('start-time').value;
  const endTime = document.getElementById('end-time').value;

  // 验证时间段
  if (startTime >= endTime) {
    alert('结束时间必须晚于开始时间！');
    return;
  }

  // 创建课程元素
  const courseItem = document.createElement('li');
  courseItem.textContent = `${courseDay} ${startTime} - ${endTime} - ${courseName}`;

  // 添加删除按钮
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '删除';
  deleteButton.style.marginLeft = '10px';
  deleteButton.addEventListener('click', function() {
    courseItem.remove();
  });
  courseItem.appendChild(deleteButton);

  // 将课程添加到课表列表
  document.getElementById('schedule-list').appendChild(courseItem);

  // 清空表单
  event.target.reset();
});

// 处理笔记的逻辑
document.getElementById('note-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // 获取表单数据
  const noteTitle = document.getElementById('note-title').value;
  const noteContent = document.getElementById('note-content').value;

  // 创建笔记元素
  const noteItem = document.createElement('li');
  const noteHeader = document.createElement('h3');
  noteHeader.textContent = noteTitle;

  const noteBody = document.createElement('p');
  noteBody.textContent = noteContent;

  const deleteNoteButton = document.createElement('button');
  deleteNoteButton.textContent = '删除';
  deleteNoteButton.style.marginLeft = '10px';
  deleteNoteButton.addEventListener('click', function() {
    noteItem.remove();
  });

  noteItem.appendChild(noteHeader);
  noteItem.appendChild(noteBody);
  noteItem.appendChild(deleteNoteButton);

  // 将笔记添加到笔记列表
  document.getElementById('notes-list').appendChild(noteItem);

  // 清空表单
  event.target.reset();
});