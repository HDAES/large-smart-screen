<template>
  <div class="content">
    <div class="header"></div>

    <div class="left-top">
      <div class="title">发电量完成情况</div>
      <div class="left-top-content">
        <div class="content-left">
          <div class="content-title">
            <img src="@/assets/image/circle.png" alt="" />
            <div class="text">发电量</div>
            <div class="line"></div>
            <img src="@/assets/image/decoration.png" alt="" />
          </div>
        </div>
        <div class="content-right">
          <div class="content-title">
            <img src="@/assets/image/circle.png" alt="" />
            <div class="text">发电量</div>
            <div class="line"></div>
            <img src="@/assets/image/decoration.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  position: relative;
  height: 1080px;
  width: 3840px;
  background-image: url('@/assets/image/bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .header {
    height: 75px;
    width: 3840px;
    background-image: url('@/assets/image/bg-top.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .left-top {
    position: absolute;
    width: 1171px;
    left: 40px;
    height: 100px;
    .title {
      height: 50px;
      width: 1171px;
      background-image: url('@/assets/image/title.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      font-size: 24px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.87);
      line-height: 50px;
      padding-left: 39px;
    }
    .left-top-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 30px;
      padding-left: 40px;
      .content-left,
      .content-right {
        width: 275px;
        display: flex;
        flex-direction: column;
        .content-title {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 40px;
          .text {
            font-size: 22px;
            font-weight: 400;
            color: #29f1fa;
            line-height: 40px;
            padding: 0 20px;
          }
          .line {
            flex: 1;
            height: 1px;
            opacity: 0.3;
            background-color: #1b7ef2;
          }
        }
      }
      .content-right {
        width: 816px;
      }
    }
  }
}
</style>
