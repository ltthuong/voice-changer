# Hướng dẫn sử dụng Realtime Voice Changer Client for RVC (v.1.5.3.13)

[English](/tutorials/tutorial_rvc_en_latest.md) [Japanese/日本語](/tutorials/tutorial_rvc_ja_latest.md) [Korean/한국어](/tutorials/tutorial_rvc_ko_latest.md)

# Giới thiệu

Ứng dụng này là phần mềm client dùng để chuyển đổi giọng nói theo thời gian thực, hỗ trợ nhiều loại model chuyển đổi giọng nói khác nhau. Ứng dụng hỗ trợ các model như RVC, MMVCv13, MMVCv15, So-vits-svcv40, v.v. Tuy nhiên, tài liệu này lấy [RVC(Retrieval-based-Voice-Conversion)](https://github.com/liujing04/Retrieval-based-Voice-Conversion-WebUI) làm ví dụ cho phần hướng dẫn chuyển đổi giọng nói. Các thao tác cơ bản với từng model về cơ bản là giống nhau.

Trong phần tiếp theo, [Retrieval-based-Voice-Conversion-WebUI](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) gốc được gọi là original-RVC, còn [RVC-WebUI](https://github.com/ddPn08/rvc-webui) do ddPn08 tạo ra được gọi là ddPn08-RVC.

## Lưu ý

- Việc huấn luyện model phải được thực hiện riêng.
  - Nếu muốn tự huấn luyện, hãy dùng [original-RVC](https://github.com/liujing04/Retrieval-based-Voice-Conversion-WebUI) hoặc [ddPn08RVC](https://github.com/ddPn08/rvc-webui).
  - [Ứng dụng ghi âm trên Github Pages](https://w-okada.github.io/voice-changer/) rất tiện để chuẩn bị giọng nói dùng cho việc huấn luyện ngay trên trình duyệt.
    - [Video giải thích](https://youtu.be/s_GirFEGvaA)
  - [Mẹo huấn luyện (TIPS for training)](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI/blob/main/docs/training_tips_en.md) đã được công bố, bạn hãy tham khảo.

# Các bước khởi động

## Khởi động GUI

### Bản Windows

Giải nén file zip đã tải về và chạy `start_http.bat`.

Nếu bạn đang có phiên bản cũ, hãy nhớ giải nén vào một thư mục riêng.

### Bản Mac

Khởi động theo các bước sau.

1. Giải nén file đã tải về.

1. Tiếp theo, giữ phím Control và click vào MMVCServerSIO để chạy (hoặc click chuột phải để chạy). Nếu xuất hiện thông báo không thể xác minh nhà phát triển, hãy giữ phím Control và click lại để chạy (hoặc click chuột phải để chạy). Terminal sẽ mở ra và quá trình sẽ kết thúc trong vài giây.

1. Tiếp theo, giữ phím Control và click vào startHTTP.command để chạy (hoặc click chuột phải để chạy). Nếu xuất hiện thông báo không thể xác minh nhà phát triển, hãy lặp lại thao tác giữ phím Control và click (hoặc click chuột phải để chạy). Terminal sẽ mở ra và quá trình khởi động sẽ bắt đầu.

- Nói cách khác, điểm mấu chốt là phải chạy cả MMVCServerSIO và startHTTP.command. Ngoài ra, bạn cần chạy MMVCServerSIO trước.

Nếu bạn đang có phiên bản cũ, hãy nhớ giải nén vào một thư mục riêng.

### Lưu ý khi kết nối từ xa

Khi kết nối từ xa, hãy dùng file `.bat` (win) và file `.command` (mac) có http được thay bằng https.

Truy cập bằng trình duyệt (hiện chỉ hỗ trợ chrome), bạn sẽ thấy giao diện GUI.

### Console

Khi bạn chạy file .bat (Windows) hoặc file .command (Mac), một màn hình như bên dưới sẽ hiển thị và ở lần khởi động đầu tiên, nhiều dữ liệu khác nhau sẽ được tải về từ Internet. Tùy vào môi trường của bạn, quá trình này thường mất khoảng 1-2 phút.

![image](https://github.com/w-okada/voice-changer/assets/48346627/88a30097-2fb3-4c50-8bf1-19c41f27c481)

### GUI

Khi đã tải xong dữ liệu cần thiết, một hộp thoại như bên dưới sẽ hiển thị. Nếu muốn, bạn có thể nhấn vào biểu tượng màu vàng để mời nhà phát triển một tách cà phê. Nhấn nút Start (bắt đầu) để đóng hộp thoại.

![image](https://github.com/w-okada/voice-changer/assets/48346627/a8d12b5c-d1e8-4ca6-aed0-72cee6bb97c1)

# Tổng quan GUI

Bạn thao tác trên màn hình này.

![image](https://github.com/w-okada/voice-changer/assets/48346627/27add00d-5059-4cbf-a732-9deb6dc309ff)

# Bắt đầu nhanh

Bạn có thể chuyển đổi giọng nói ngay bằng dữ liệu đã tải về khi khởi động.

## Thao tác

(1) Để bắt đầu, click vào khu vực chọn model để chọn model bạn muốn dùng. Khi model đã được tải, hình ảnh nhân vật sẽ hiển thị trên màn hình.

(2) Chọn micro (input) và loa (output) bạn muốn dùng. Nếu chưa quen, chúng tôi khuyên bạn nên chọn client rồi chọn micro và loa. (Sự khác biệt so với server sẽ được giải thích ở phần sau).

(3) Khi bạn nhấn nút start (bắt đầu), quá trình chuyển đổi giọng nói sẽ bắt đầu sau vài giây tải dữ liệu. Hãy thử nói gì đó vào micro. Bạn sẽ nghe thấy giọng nói đã được chuyển đổi phát ra từ loa.

![image](https://github.com/w-okada/voice-changer/assets/48346627/883b296e-e5ca-4571-8fed-dcf7495ebb92)

## FAQ về Bắt đầu nhanh

Q1. Âm thanh bị ngắt quãng, giật cục.

A1. Có thể hiệu năng PC của bạn chưa đủ. Hãy thử tăng giá trị CHUNK (độ dài mỗi đoạn âm thanh được cắt ra để chuyển đổi, mục A trong hình, ví dụ 1024). Ngoài ra, hãy thử đặt F0 Det (thuật toán trích xuất cao độ) thành dio (mục B trong hình).

![image](https://github.com/w-okada/voice-changer/assets/48346627/3c485d9b-53be-47c1-85d9-8663363b06f9)

Q2. Giọng nói không được chuyển đổi.

A2. Hãy tham khảo [tài liệu này](https://github.com/w-okada/voice-changer/blob/master/tutorials/trouble_shoot_communication_ja.md) để xác định vấn đề nằm ở đâu và tìm cách khắc phục.

Q3. Cao độ (pitch) bị lệch.

A3. Tuy chưa được giải thích trong phần Bắt đầu nhanh, nếu model hỗ trợ thay đổi cao độ, bạn có thể điều chỉnh bằng TUNE (chỉnh cao độ). Hãy xem phần giải thích chi tiết bên dưới.

Q4. Cửa sổ không hiện ra, hoặc cửa sổ hiện ra nhưng không hiển thị nội dung. Console hiển thị lỗi như `electron: Failed to load URL: http://localhost:18888/ with error: ERR_CONNECTION_REFUSED`.

A4. Có thể phần mềm diệt virus đang quét. Hãy chờ một lúc, hoặc thêm thư mục vào danh sách loại trừ (bạn tự chịu rủi ro).

Q5. Hiển thị thông báo `[4716:0429/213736.103:ERROR:gpu_init.cc(523)] Passthrough is not supported, GL is disabled, ANGLE is`

A5. Đây là lỗi do thư viện mà ứng dụng sử dụng tạo ra, nhưng không gây ảnh hưởng gì, bạn có thể bỏ qua.

Q6. GPU AMD của tôi không được sử dụng.

A6. Hãy dùng bản DirectML. Ngoài ra, GPU AMD chỉ hoạt động với model ONNX. Bạn có thể kiểm tra bằng cách xem mức sử dụng GPU có tăng lên trong Performance Monitor hay không. ([xem tại đây](https://github.com/w-okada/voice-changer/issues/383))

Q7. onxxruntime không khởi động được và báo lỗi.

A7. Có vẻ lỗi sẽ xảy ra nếu đường dẫn thư mục chứa ký tự unicode. Hãy giải nén vào đường dẫn không dùng unicode (chỉ gồm chữ cái và số). (Tham khảo: https://github.com/w-okada/voice-changer/issues/528)

## Các mục có thể thiết lập

## Khu vực tiêu đề

![image](https://github.com/w-okada/voice-changer/assets/48346627/bb813fbb-4ea1-4c3b-87b0-da75b7eaac5e)

Các biểu tượng là đường liên kết.

| Biểu tượng                                                                                                                         | Liên kết đến         |
| :--------------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| <img src="https://github.com/w-okada/rvc-trainer-docker/assets/48346627/97c18ca5-eee5-4be2-92a7-8092fff960f2" width="32"> Octocat  | kho mã nguồn github  |
| <img src="https://github.com/w-okada/rvc-trainer-docker/assets/48346627/751164e4-7b7d-4d7e-b49c-1ad660bf7439" width="32"> dấu hỏi  | hướng dẫn sử dụng    |
| <img src="https://github.com/w-okada/rvc-trainer-docker/assets/48346627/7bc188db-3aae-43eb-98a1-34aacc16173d" width="32"> cờ lê    | công cụ              |
| <img src="https://github.com/w-okada/rvc-trainer-docker/assets/48346627/5db16acc-e901-40d2-8fc2-1fb9fd67f59c" width="32"> cà phê   | ủng hộ nhà phát triển |

### clear setting

Đặt lại cấu hình về mặc định.

## Chọn model

![image](https://github.com/w-okada/voice-changer/assets/48346627/503eb581-a560-42b2-985b-d229d186eac8)

Chọn model bạn muốn sử dụng.

Nhấn nút "edit" (chỉnh sửa) để chỉnh sửa danh sách model (model slot). Xem thêm chi tiết ở phần màn hình chỉnh sửa model slot.

## Điều khiển chính

![image](https://github.com/w-okada/voice-changer/assets/48346627/4401acdb-eb58-40e1-9609-5a82ee5eb570)

Hình ảnh nhân vật của model đã tải sẽ hiển thị ở bên trái. Trạng thái của bộ chuyển đổi giọng nói thời gian thực được hiển thị chồng lên góc trên bên trái của hình nhân vật.

Bạn có thể dùng các nút và thanh trượt ở bên phải để điều khiển các thiết lập.

### Trạng thái chuyển đổi giọng nói thời gian thực

Độ trễ từ lúc nói đến lúc chuyển đổi xong là `buf + res` giây. Khi điều chỉnh, hãy đảm bảo thời gian buf dài hơn thời gian res.

#### vol

Âm lượng sau khi chuyển đổi giọng nói.

#### buf

Độ dài (ms) của mỗi đoạn âm thanh được cắt ra khi thu âm. Giảm CHUNK sẽ làm giá trị này giảm theo.

#### res

Thời gian cần để chuyển đổi dữ liệu gồm CHUNK cộng thêm EXTRA (độ dài âm thanh quá khứ được đưa thêm vào). Giảm CHUNK hoặc EXTRA đều sẽ làm giá trị này giảm.

### Điều khiển

#### Nút start/stop

Nhấn "start" để bắt đầu chuyển đổi giọng nói và "stop" (dừng) để kết thúc.

#### Nút pass through

Khi nhấn nút này, âm thanh đầu vào sẽ được phát ra nguyên trạng, không qua chuyển đổi.

Mặc định, một hộp thoại xác nhận sẽ hiện ra khi bật chức năng này, nhưng bạn có thể bỏ qua hộp thoại này trong Advanced Setting (cài đặt nâng cao).

#### GAIN

- in: Thay đổi âm lượng của âm thanh đầu vào đưa vào model.

- out: Thay đổi âm lượng của âm thanh đã chuyển đổi.

#### TUNE

Nhập giá trị cho biết mức độ thay đổi cao độ của giọng nói. Có thể thay đổi cả trong lúc đang suy luận (inference). Dưới đây là một số giá trị tham khảo.

- +12 khi chuyển giọng nam thành giọng nữ
- -12 khi chuyển giọng nữ thành giọng nam

#### INDEX (Chỉ dành cho RVC)

Bạn có thể chỉ định tỷ lệ kéo đặc trưng (feature) về phía các đặc trưng đã dùng khi huấn luyện. Chỉ có hiệu lực với các model đã đăng ký file index. Giá trị 0 sẽ dùng nguyên đầu ra của HuBERT, còn 1 sẽ kéo hoàn toàn về các đặc trưng gốc. Nếu index ratio lớn hơn 0, việc tìm kiếm có thể mất nhiều thời gian hơn.

#### Voice

Chọn người nói (giọng đích) cho việc chuyển đổi giọng nói.

#### save setting

Lưu các thiết lập đã chỉ định. Khi gọi lại model, các thiết lập này sẽ được áp dụng (trừ một số mục).

#### export to onnx

Chức năng này chuyển đổi model PyTorch sang ONNX và xuất ra. Chỉ có hiệu lực khi model đang tải là model RVC PyTorch.

#### Khác

Các mục có thể thiết lập sẽ khác nhau tùy theo model AI đang sử dụng. Hãy kiểm tra tính năng và các thông tin khác trên trang web của nhà phát triển model.

## Cấu hình

![image](https://github.com/w-okada/voice-changer/assets/48346627/cd04ba9f-f7e8-4a7e-8c93-cda3c81f3c1a)

Bạn có thể xem lại các thiết lập hoạt động và nội dung của quá trình chuyển đổi.

#### NOISE

Bạn có thể bật/tắt tính năng khử nhiễu, tuy nhiên tính năng này chỉ khả dụng ở chế độ Client Device.

- Echo: Tính năng khử tiếng vọng (echo cancellation)
- Sup1, Sup2: Tính năng giảm nhiễu (noise suppression).

#### F0 Det (F0 Extractor)

Chọn thuật toán để trích xuất cao độ. Bạn có thể chọn một trong các tùy chọn sau. GPU AMD chỉ khả dụng với onnx.

| F0 Extractor | loại  | mô tả                      |
| ------------ | ----- | -------------------------- |
| dio          | cpu   | nhẹ                        |
| harvest      | cpu   | độ chính xác cao           |
| crepe        | torch | dùng GPU, độ chính xác cao |
| crepe full   | onnx  | dùng GPU, độ chính xác cao |
| crepe tiny   | onnx  | dùng GPU, nhẹ              |
| rnvpe        | torch | dùng GPU, độ chính xác cao |

#### S. Thresh (Noise Gate)

Đây là ngưỡng âm lượng để thực hiện chuyển đổi giọng nói. Khi rms nhỏ hơn giá trị này, việc chuyển đổi giọng nói sẽ bị bỏ qua và trả về khoảng lặng. (Trong trường hợp này, vì quá trình chuyển đổi được bỏ qua nên tải xử lý sẽ không lớn.)

#### CHUNK (Input Chunk Num)

Quyết định độ dài đoạn âm thanh được cắt ra và chuyển đổi trong mỗi lần chuyển đổi. Giá trị càng lớn thì chuyển đổi càng hiệu quả, nhưng giá trị buf cũng càng lớn và thời gian tối đa trước khi bắt đầu chuyển đổi càng dài. Thời gian ước tính được hiển thị ở buff:.

#### EXTRA (Extra Data Length)

Quyết định độ dài âm thanh quá khứ được đưa vào đầu vào khi chuyển đổi giọng nói. Âm thanh quá khứ càng dài thì độ chính xác chuyển đổi càng tốt, nhưng thời gian tính toán càng lâu nên res cũng càng dài.
(Có lẽ do Transformer là điểm nghẽn, thời gian tính toán sẽ tăng theo bình phương của độ dài này)

Chi tiết xem [tại đây](https://github.com/w-okada/voice-changer/issues/154#issuecomment-1502534841)

#### GPU

Ở bản onnxgpu, bạn có thể chọn GPU sẽ sử dụng.

Ở bản onnxdirectML, bạn có thể bật/tắt GPU.

Ở bản DirectML, các nút sau sẽ được hiển thị.

![image](https://github.com/w-okada/voice-changer/assets/48346627/5a66f237-e5b5-4819-9409-ff5eebb6e514)

- cpu: dùng cpu
- gpu0: dùng gpu0
- gpu1: dùng gpu1
- gpu2: dùng gpu2
- gpu3: dùng gpu3

Ngay cả khi không phát hiện được GPU, gpu0 - gpu3 vẫn sẽ hiển thị. Nếu bạn chọn một GPU không tồn tại, CPU sẽ được dùng thay thế. [Tham khảo](https://github.com/w-okada/voice-changer/issues/410)

#### AUDIO

Chọn loại thiết bị âm thanh bạn muốn dùng. Chi tiết xem [tài liệu này](./tutorial_device_mode_ja.md).

- Client: Bạn có thể dùng micro làm đầu vào và loa làm đầu ra, kèm các chức năng của GUI như khử nhiễu.
- Server: VC Client điều khiển trực tiếp micro và loa để giảm độ trễ tối đa.

#### input

Bạn có thể chọn thiết bị đầu vào âm thanh như micro. Cũng có thể dùng file âm thanh làm đầu vào (có giới hạn dung lượng).

Với người dùng Windows, có thể dùng âm thanh hệ thống (system sound) làm đầu vào. Lưu ý nếu bạn đặt âm thanh hệ thống làm đầu ra, âm thanh sẽ bị lặp vòng.

#### output

Bạn có thể chọn thiết bị đầu ra âm thanh như loa.

#### monitor

Bạn có thể chọn thiết bị đầu ra âm thanh như loa để nghe kiểm tra (monitor). Chỉ khả dụng ở chế độ server device.

Hãy xem [tài liệu này](tutorial_monitor_consept_ja.md) để nắm tổng quan về ý tưởng này.

#### REC.

Xuất âm thanh đã chuyển đổi ra file.

### ServerIO Analizer

Bạn có thể ghi âm và kiểm tra âm thanh đầu vào của AI chuyển đổi giọng nói cũng như âm thanh đầu ra từ AI chuyển đổi giọng nói.

Hãy xem [tài liệu này](trouble_shoot_communication_ja.md) để nắm tổng quan về ý tưởng này.

#### SIO rec.

Bắt đầu/dừng ghi âm cả âm thanh đầu vào của AI chuyển đổi giọng nói lẫn âm thanh đầu ra từ AI chuyển đổi giọng nói.

#### output

Chọn loa dùng để phát lại âm thanh đã ghi.

#### in

Phát âm thanh đã được đưa vào AI chuyển đổi giọng nói.

#### out

Phát âm thanh đầu ra từ AI chuyển đổi giọng nói.

### more...

Bạn có thể thực hiện các thao tác nâng cao hơn.

#### Merge Lab

Có thể kết hợp (merge) các model với nhau.

#### Advanced Setting

Bạn có thể thiết lập các cài đặt nâng cao hơn.

#### Server Info

Bạn có thể kiểm tra cấu hình hiện tại của server.

# Màn hình chỉnh sửa model slot

Nhấn nút edit trong khu vực chọn model slot để chỉnh sửa model slot.

![image](https://github.com/w-okada/voice-changer/assets/48346627/a4735a2e-540e-4e7c-aa70-ba5b91ff09eb)

## Khu vực biểu tượng

Bạn có thể thay đổi hình ảnh bằng cách click vào biểu tượng.

## Khu vực file

Bạn có thể tải file về bằng cách click vào tên file.

## Nút upload

Bạn có thể tải model lên (upload).

Trong màn hình upload, bạn có thể chọn loại voice changer cần tải lên.

Bạn có thể quay lại màn hình chỉnh sửa model slot bằng cách nhấn nút back.

![image](https://github.com/w-okada/voice-changer/assets/48346627/012c3585-0be2-4846-969a-882dcc07837b)

## Nút sample

Bạn có thể tải về model mẫu (sample).

Bạn có thể quay lại màn hình chỉnh sửa model slot bằng cách nhấn nút back.

![image](https://github.com/w-okada/voice-changer/assets/48346627/1c6e2529-af80-479a-8002-c37ebeb0c807)

## Nút edit

Bạn có thể chỉnh sửa chi tiết của model slot.
