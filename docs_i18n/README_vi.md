[Tiếng Nhật](/README.md) /
[Tiếng Anh](/docs_i18n/README_en.md) /
[Tiếng Hàn](/docs_i18n/README_ko.md)/
[Tiếng Trung](/docs_i18n/README_zh.md)/
[Tiếng Đức](/docs_i18n/README_de.md)/
[Tiếng Ả Rập](/docs_i18n/README_ar.md)/
[Tiếng Hy Lạp](/docs_i18n/README_el.md)/
[Tiếng Tây Ban Nha](/docs_i18n/README_es.md)/
[Tiếng Pháp](/docs_i18n/README_fr.md)/
[Tiếng Ý](/docs_i18n/README_it.md)/
[Tiếng Latinh](/docs_i18n/README_la.md)/
[Tiếng Mã Lai](/docs_i18n/README_ms.md)/
[Tiếng Nga](/docs_i18n/README_ru.md)/
[Tiếng Việt](/docs_i18n/README_vi.md)
*Các ngôn ngữ khác ngoài tiếng Nhật đều là bản dịch máy.

## VCClient

VCClient là phần mềm chuyển đổi giọng nói theo thời gian thực bằng AI.

## What's New!

* v.2.2.2-beta
  * Các edition phát hành: std_win, std_mac, std_lin_aarch64
  * Từ v.2.2.2-beta, mô hình được hỗ trợ sẽ khác nhau theo từng edition (xem bên dưới). Ngoài ra, các edition được phát hành có thể khác nhau tùy theo phiên bản.
  * Hỗ trợ Beatrice v2.0.0-rc0.
* v.2.1.3-alpha
  * Phím tắt
  * Trực quan hóa bộ đệm (buffer)
  * Hiện chỉ dành cho rvc
* v.2.0.78-beta
  * bugfix: Khắc phục lỗi khi tải lên mô hình RVC
  * Giờ đây có thể chạy đồng thời với ver.1.x.
  * Tăng số lượng chunk size có thể chọn.
* v.2.0.77-beta (chỉ dành cho RTX 5090, thử nghiệm)
  * Cập nhật các module liên quan để hỗ trợ RTX 5090 (chưa được kiểm chứng do nhà phát triển không sở hữu RTX 5090)
* v.2.0.76-beta
  * new feature:
    * Beatrice: Triển khai tính năng gộp người nói (speaker merge)
    * Beatrice: Tự động dịch cao độ (auto pitch shift)
  * bugfix:
    * Khắc phục lỗi khi chọn thiết bị ở chế độ máy chủ
* v.2.0.73-beta
  * new feature:
    * Tải xuống mô hình beatrice đã chỉnh sửa
  * bugfix:
    * Sửa lỗi pitch và formant của beatrice v2 không được áp dụng
    * Sửa lỗi không thể tạo ONNX cho các mô hình sử dụng embedder của Applio

## Các edition

Từ v2.2.1 trở đi, mô hình AI được hỗ trợ sẽ khác nhau tùy theo edition.

| edition | Nền tảng       | Mô hình hỗ trợ |     |
| ------- | -------------- | -------------- | --- |
| std     | win            | Beatrice       |     |
| std     | mac(m1)        | Beatrice       |     |
| std     | linux(x86-64)  | Beatrice       |     |
| std     | linux(aarch64) | Beatrice       |     |
| cuda    | win            | Beatrice, RVC  |     |
| onnx    | win            | Beatrice, RVC  |     |
| onnx    | mac(m1)        | Beatrice, RVC  |     |

## Tải xuống và liên kết liên quan

Bản dành cho Windows và M1 Mac có thể tải xuống từ kho lưu trữ trên hugging face.

* [Kho lưu trữ VCClient](https://huggingface.co/wok000/vcclient000/tree/main)
* [Kho lưu trữ Light VCClient for Beatrice v2](https://huggingface.co/wok000/light_vcclient_beatrice/tree/main)

*1 Với Linux, vui lòng clone kho lưu trữ về để sử dụng.

### Liên kết liên quan

* [Hướng dẫn sử dụng VCClient cho RVC (tiếng Việt)](/tutorials/tutorial_rvc_vi_latest.md)
* [Kho lưu trữ mã huấn luyện Beatrice V2](https://huggingface.co/fierce-cats/beatrice-trainer)
* [Mã huấn luyện Beatrice V2 phiên bản Colab](https://github.com/w-okada/beatrice-trainer-colab)

### Phần mềm liên quan

* [Phần mềm đổi giọng thời gian thực VCClient](https://github.com/w-okada/voice-changer)
* [Phần mềm đọc văn bản TTSClient](https://github.com/w-okada/ttsclient)
* [Phần mềm nhận dạng giọng nói thời gian thực ASRClient](https://github.com/w-okada/asrclient)

## Đặc điểm của VC Client

## Hỗ trợ nhiều mô hình AI khác nhau

| Mô hình AI                                                                                                   | v.2       | v.1                  | Giấy phép                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | --------- | -------------------- | ------------------------------------------------------------------------------------------ |
| [RVC ](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI/blob/main/docs/jp/README.ja.md) | supported | supported            | Vui lòng tham khảo kho lưu trữ.                                                            |
| [Beatrice v1](https://prj-beatrice.com/)                                                                     | n/a       | supported (only win) | [Riêng](https://github.com/w-okada/voice-changer/tree/master/server/voice_changer/Beatrice) |
| [Beatrice v2](https://prj-beatrice.com/)                                                                     | supported | n/a                  | [Riêng](https://huggingface.co/wok000/vcclient_model/blob/main/beatrice_v2_beta/readme.md)  |
| [MMVC](https://github.com/isletennos/MMVC_Trainer)                                                           | n/a       | supported            | Vui lòng tham khảo kho lưu trữ.                                                            |
| [so-vits-svc](https://github.com/svc-develop-team/so-vits-svc)                                               | n/a       | supported            | Vui lòng tham khảo kho lưu trữ.                                                            |
| [DDSP-SVC](https://github.com/yxlllc/DDSP-SVC)                                                               | n/a       | supported            | Vui lòng tham khảo kho lưu trữ.                                                            |

## Hỗ trợ cả cấu hình độc lập lẫn cấu hình qua mạng

Hỗ trợ cả chuyển đổi giọng nói hoàn toàn trên PC cục bộ lẫn chuyển đổi giọng nói qua mạng.
Khi sử dụng qua mạng, bạn có thể chuyển tải xử lý chuyển đổi giọng nói ra máy bên ngoài khi dùng đồng thời với các ứng dụng nặng như game.

![image](https://user-images.githubusercontent.com/48346627/206640768-53f6052d-0a96-403b-a06c-6714a0b7471d.png)

## Hỗ trợ nhiều nền tảng

Windows, Mac(M1), Linux, Google Colab

*1 Với Linux, vui lòng clone kho lưu trữ về để sử dụng.

## Cung cấp REST API

Có thể tạo client bằng nhiều ngôn ngữ lập trình khác nhau.

Ngoài ra, bạn cũng có thể thao tác bằng các HTTP client tích hợp sẵn trong hệ điều hành như curl.

## Khắc phục sự cố

[Phần kết nối mạng](/tutorials/trouble_shoot_communication_ja.md)

## Về chữ ký của nhà phát triển

Phần mềm này không được ký bởi nhà phát triển. Cảnh báo như bên dưới sẽ xuất hiện, nhưng bạn có thể chạy phần mềm bằng cách nhấn giữ phím Control trong khi nhấp vào biểu tượng. Điều này là do chính sách bảo mật của Apple. Bạn tự chịu trách nhiệm khi chạy phần mềm.

![image](https://user-images.githubusercontent.com/48346627/212567711-c4a8d599-e24c-4fa3-8145-a5df7211f023.png)

## Acknowledgments

* [Tư liệu Tachi Zundamon](https://seiga.nicovideo.jp/seiga/im10792934)
* [Irasutoya](https://www.irasutoya.com/)
* [Tsukuyomi-chan](https://tyc.rei-yumesaki.net/)

```
  本ソフトウェアの音声合成には、フリー素材キャラクター「つくよみちゃん」が無料公開している音声データを使用しています。
  ■つくよみちゃんコーパス（CV.夢前黎）
  https://tyc.rei-yumesaki.net/material/corpus/
  © Rei Yumesaki
```

* [Xưởng tư liệu giọng nói của Amitaro](https://amitaro.net/)
* [Replica Doll](https://kikyohiroto1227.wixsite.com/kikoto-utau)

## Điều khoản sử dụng

* Đối với bộ đổi giọng thời gian thực Tsukuyomi-chan, theo điều khoản sử dụng của Tsukuyomi-chan Corpus, nghiêm cấm sử dụng giọng nói sau khi chuyển đổi cho các mục đích sau.

```

■人を批判・攻撃すること。（「批判・攻撃」の定義は、つくよみちゃんキャラクターライセンスに準じます）

■特定の政治的立場・宗教・思想への賛同または反対を呼びかけること。

■刺激の強い表現をゾーニングなしで公開すること。

■他者に対して二次利用（素材としての利用）を許可する形で公開すること。
※鑑賞用の作品として配布・販売していただくことは問題ございません。
```

* Đối với bộ đổi giọng thời gian thực Amitaro, tuân theo điều khoản sử dụng sau đây của Xưởng tư liệu giọng nói của Amitaro. Chi tiết xem [tại đây](https://amitaro.net/voice/faq/#index_id6)

```
あみたろの声素材やコーパス読み上げ音声を使って音声モデルを作ったり、ボイスチェンジャーや声質変換などを使用して、自分の声をあみたろの声に変換して使うのもOKです。

ただしその場合は絶対に、あみたろ（もしくは小春音アミ）の声に声質変換していることを明記し、あみたろ（および小春音アミ）が話しているわけではないことが誰でもわかるようにしてください。
また、あみたろの声で話す内容は声素材の利用規約の範囲内のみとし、センシティブな発言などはしないでください。
```

* Đối với bộ đổi giọng thời gian thực Kikoto Mahiro, tuân theo điều khoản sử dụng của Replica Doll. Chi tiết xem [tại đây](https://kikyohiroto1227.wixsite.com/kikoto-utau/ter%EF%BD%8Ds-of-service)

## Tuyên bố miễn trừ trách nhiệm

Chúng tôi không chịu bất kỳ trách nhiệm nào đối với mọi thiệt hại trực tiếp, gián tiếp, lan truyền, hệ quả hoặc đặc biệt phát sinh từ việc sử dụng hoặc không thể sử dụng phần mềm này.
