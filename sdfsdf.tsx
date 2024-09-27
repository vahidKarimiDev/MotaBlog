function changeFileExtension(file, newExtension) {
  const oldName = file.name;
  const newName = oldName.replace(/\.[^/.]+$/, "") + `.${newExtension}`;

  // ایجاد یک فایل جدید با پسوند جدید
  const newFile = new File([file], newName, {
    type: `image/${newExtension}`,
    lastModified: file.lastModified,
  });

  return newFile;
}

// نمونه استفاده در یک ورودی فایل
const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0]; // اولین فایل آپلود شده
  const newFile = changeFileExtension(file, "jpg"); // تغییر پسوند به jpg

  console.log("Old File:", file);
  console.log("New File:", newFile);
});
