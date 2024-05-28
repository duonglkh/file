import json

# Mở tệp JSON
with open('data.json') as f:
  data = json.load(f)

# Tìm danh sách ảnh cần thêm thông tin
images_list = data['combinations']

# Thêm thông tin cho từng ảnh
for image in images_list:
  if image['name'] == 'u1f33a_u1f49e':
    image['leftEmojiCodepoint'] = '1f49e'
    image['rightEmojiCodepoint'] = '1f33a'
    image['date'] = '20240517'

# Cập nhật dữ liệu JSON
data['combinations'] = images_list

# Lưu tệp JSON đã cập nhật
with open('data.json', 'w') as f:
  json.dump(data, f)
