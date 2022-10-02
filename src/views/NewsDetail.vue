<template>
  <div>
    <van-nav-bar
      title="详情"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <div class="news-detail">
      <article>
        <h1>这几件国礼，意涵丰富，大有讲究</h1>
        <div class="pubdate">
          <div>文章所属：儿童教育</div>
          <div>发布于 <span>12/12 12:12</span></div>
        </div>
        <div class="content">
          <p>
            新华社努尔苏丹9月16日电
            国际交往，讲究礼尚往来。国礼既是人民友谊的使者，也是国家间友好关系的见证。此次访问哈萨克斯坦，习近平主席给托卡耶夫总统带来了几件国礼，每一件都意涵丰富，大有讲究。
          </p>
          <p>
            一是名为《中哈友好》的景泰蓝内画尊。这件礼品以中国传统礼器“尊”为器型，融合了中国非物质文化遗产景泰蓝工艺和内画工艺。内画部分是四幅精挑细选的图案：古丝绸之路、中哈油气管道项目、中哈霍尔果斯国际边境合作中心、过境哈萨克斯坦的中欧班列。
          </p>
          <p>
            <img
              src="https://gwx-my-course.oss-cn-hangzhou.aliyuncs.com/20220917/4c0d006d73f94dc98dd95ae22e7f5cc3.jpeg"
            />
          </p>
          <p>
            习近平主席曾说：“哈萨克斯坦这片土地，是古丝绸之路经过的地方，曾经为沟通东西方文明，促进不同民族、不同文化相互交流和合作作出过重要贡献。”2013年，正是在哈萨克斯坦，习近平主席首次提出共建“丝绸之路经济带”倡议。这件景泰蓝内画尊融通古今，既展示了中哈交往的悠久历史，也呈现出中哈共建“一带一路”的丰硕成果，更寄托着中哈永久全面战略伙伴关系行稳致远的美好祈愿。
          </p>
          <p>
            二是湘绣单面绣《长城》。湘绣是中国四大名绣之一，长城是中华文化的符号之一，象征意志和勇气、团结和力量。这幅湘绣，借长城的寓意，祝愿哈萨克斯坦人民团结一心建设“新哈萨克斯坦”取得成功。
          </p>
          <p>
            三是一套文房用品，毛笔精工细作，徽墨色泽黑润，端砚坚实细腻，铜质文房用品温润敦厚。讲清楚这份国礼的“门道”，首先要介绍托卡耶夫总统的另一个“身份”：“博学的汉学家”。
          </p>
          <p>
            20世纪八九十年代，托卡耶夫在北京深造学习，后来担任驻华外交官。在哈萨克斯坦外交家博拉特·努尔加利耶夫看来，托卡耶夫总统熟知中国历史、文化和现实国情，这将帮助他同习近平主席展开“高度信任和内容丰富的对话”，在更广泛的意义上，还有助于“深化和扩大哈中互利合作”。
          </p>
          <p>
            当然，习近平主席向托卡耶夫总统赠送文房用品不仅因为他熟知中国文化，更要借此表达中国人民对哈萨克斯坦人民书写国家发展新篇章的美好祝愿。
          </p>
        </div>
      </article>

      <div class="comments">
        <div class="comment-send">
          <div class="comments-submit">
            <img src="@/assets/image/default-face.png" class="user-face" />
            <textarea placeholder="说说你的看法"></textarea>
          </div>
          <button type="button" class="send-btn">发表</button>
        </div>
        <div class="comments-list">
          <div class="comments-item">
            <div class="comments-top">
              <img
                src="https://gwx-my-course.oss-cn-hangzhou.aliyuncs.com/20220815/0c21eb5483af43a7a28b42a449e76cda.jpeg"
              />
              <span class="nickname">Jay</span> <span class="date">刚刚</span>
            </div>
            <div class="comment-content">
              太阳像个老大老大的火球，光线灼人，公路被烈日烤得发烫，脚踏下去一步一串白烟。天气闷热得要命，一丝风也没有，稠乎乎的空气好像凝住了。整个城市像烧透了的砖窑，使人喘不过气来。狗趴在地上吐出鲜红的舌头，骡马的鼻孔张得特别大。
            </div>
          </div>
          <div class="comments-item">
            <div class="comments-top">
              <img
                src="https://gwx-my-course.oss-cn-hangzhou.aliyuncs.com/20220815/0c21eb5483af43a7a28b42a449e76cda.jpeg"
              />
              <span class="nickname">Jay</span> <span class="date">刚刚</span>
            </div>
            <div class="comment-content">
              太阳像个老大老大的火球，光线灼人，公路被烈日烤得发烫，脚踏下去一步一串白烟。天气闷热得要命，一丝风也没有，稠乎乎的空气好像凝住了。整个城市像烧透了的砖窑，使人喘不过气来。狗趴在地上吐出鲜红的舌头，骡马的鼻孔张得特别大。
            </div>
          </div>
          <div class="comments-item">
            <div class="comments-top">
              <img
                src="https://gwx-my-course.oss-cn-hangzhou.aliyuncs.com/20220815/0c21eb5483af43a7a28b42a449e76cda.jpeg"
              />
              <span class="nickname">Jay</span> <span class="date">刚刚</span>
            </div>
            <div class="comment-content">
              太阳像个老大老大的火球，光线灼人，公路被烈日烤得发烫，脚踏下去一步一串白烟。天气闷热得要命，一丝风也没有，稠乎乎的空气好像凝住了。整个城市像烧透了的砖窑，使人喘不过气来。狗趴在地上吐出鲜红的舌头，骡马的鼻孔张得特别大。
            </div>
          </div>
          <div class="comments-item">
            <div class="comments-top">
              <img
                src="https://gwx-my-course.oss-cn-hangzhou.aliyuncs.com/20220815/0c21eb5483af43a7a28b42a449e76cda.jpeg"
              />
              <span class="nickname">Jay</span> <span class="date">刚刚</span>
            </div>
            <div class="comment-content">
              太阳像个老大老大的火球，光线灼人，公路被烈日烤得发烫，脚踏下去一步一串白烟。天气闷热得要命，一丝风也没有，稠乎乎的空气好像凝住了。整个城市像烧透了的砖窑，使人喘不过气来。狗趴在地上吐出鲜红的舌头，骡马的鼻孔张得特别大。
            </div>
          </div>
          <div class="comments-item">
            <div class="comments-top">
              <img
                src="https://gwx-my-course.oss-cn-hangzhou.aliyuncs.com/20220815/0c21eb5483af43a7a28b42a449e76cda.jpeg"
              />
              <span class="nickname">Jay</span> <span class="date">刚刚</span>
            </div>
            <div class="comment-content">
              太阳像个老大老大的火球，光线灼人，公路被烈日烤得发烫，脚踏下去一步一串白烟。天气闷热得要命，一丝风也没有，稠乎乎的空气好像凝住了。整个城市像烧透了的砖窑，使人喘不过气来。狗趴在地上吐出鲜红的舌头，骡马的鼻孔张得特别大。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-detail',
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
article {
  padding: (15 / @rootSize);
  background-color: #fff;

  .pubdate {
    display: flex;
    color: #999;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  h1 {
    margin: 0;
    font-size: (22 / @rootSize);
    margin-bottom: (10 / @rootSize);
  }
  img {
    display: block;
    max-width: 100%;
  }
  p {
    margin: (8 / @rootSize) 0;
    line-height: 1.5;
  }
}
.comments {
  margin-top: 20px;
  margin-bottom: 30px;
  background-color: #fff;
  .comments-submit {
    display: flex;
    padding: 15px 4vw 0;
    margin-top: 5.33333333vw;
    .user-face {
      width: 10.66666667vw;
      height: 10.66666667vw;
      border-radius: 50%;
    }
    textarea {
      flex: 1;
      margin-left: 2.66666667vw;
      resize: none;
      height: 26.66666667vw;
      font-size: 3.73333333vw;
      border: 1px solid #ddd;
      outline: none;
      padding: 1.33333333vw;
      border-radius: 5px;
    }
  }
  .comment-send {
    position: relative;
    margin-bottom: 5.33333333vw;
  }
  .comment-send .send-btn {
    position: absolute;
    right: 4vw;
    bottom: -9.6vw;
    border-radius: 6px;
    padding: 1.33333333vw 4vw;
    border: none;
    background-color: #f97711;
    color: #fff;
  }
  .comments-list {
    padding: 0 4vw;
    .comments-item {
      padding: 3.2vw 0;
      border-bottom: 1px solid #eee;

      .comments-top {
        display: flex;
        align-items: center;
        img {
            width: 10.66666667vw;
            height: 10.66666667vw;
            border-radius: 50%;
            margin-right: 4vw;
        }
         .nickname {
            font-size: 4.26666667vw;
            color: #3d4145;
            margin-right: 5.33333333vw;
        }
         .date {
            color: #5f646e;
            font-size: 3.46666667vw;
        }
      }

      .comment-content {
          font-size: 3.73333333vw;
          color: #3d3d3d;
          margin-top: 2.66666667vw;
      }
    }
  }
}
</style>
