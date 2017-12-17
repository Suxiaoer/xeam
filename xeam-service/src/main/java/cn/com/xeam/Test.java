package cn.com.xeam;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;

public class Test {
	
	public BufferedImage mergePicHr(List<String> picList){
		int count = 0;
		File fileOne = null;
		BufferedImage ImageNew = null;
		int width = 0;
		int height = 0;
		
		for(String temp: picList){
			String tempPic = "";
			if("0".equals(temp)){
				tempPic = "num_0.png";
			}else if("1".equals(temp)){
				tempPic = "num_1.png";
			}else if("2".equals(temp)){
				tempPic = "num_2.png";
			}else if("3".equals(temp)){
				tempPic = "num_3.png";
			}else if("4".equals(temp)){
				tempPic = "num_4.png";
			}else if("5".equals(temp)){
				tempPic = "num_5.png";
			}else if("6".equals(temp)){
				tempPic = "num_6.png";
			}else if("7".equals(temp)){
				tempPic = "num_7.png";
			}else if("8".equals(temp)){
				tempPic = "num_8.png";
			}else if("9".equals(temp)){
				tempPic = "num_9.png";
			}else if("大".equals(temp)){
				tempPic = "da.png";
			}else if("小".equals(temp)){
				tempPic = "xiao.png";
			}else if("龙".equals(temp)){
				tempPic = "long.png";
			}else if("虎".equals(temp)){
				tempPic = "hu.png";
			}else if("合".equals(temp)){
				tempPic = "he.png";
			}
			
			try{
				if(count == 0){
					 fileOne = new File("E:/temp/img/" + tempPic);
					 BufferedImage ImageOne = ImageIO.read(fileOne);
					 width = ImageOne.getWidth();
				      // 图片宽度
				     height = ImageOne.getHeight();
					 ImageNew = new BufferedImage(width*picList.size(), height,BufferedImage.TYPE_INT_RGB);
					 int[] ImageArrayOne = new int[width * height];
				     ImageArrayOne = ImageOne.getRGB(0, 0, width, height, ImageArrayOne,0, width);
					 ImageNew.setRGB(0, 0, width, height, ImageArrayOne, 0, width);
				}else{
					 File fileTwo = new File("E:/temp/img/" + tempPic);
					 BufferedImage ImageTwo = ImageIO.read(fileTwo);
					
				     int[] ImageArrayTwo = new int[width * height];
				     ImageArrayTwo = ImageTwo.getRGB(0, 0, width, height, ImageArrayTwo,0, width);
				     ImageNew.setRGB(width+((count-1)*width), 0, width, height, ImageArrayTwo, 0, width);// 设置右半部分的RGB
				}
			}catch(Exception e){
				e.printStackTrace();
			}
			count++;
		}
		File outFile = new File("E:/temp/third.jpg");
	    try {
			ImageIO.write(ImageNew, "png", outFile);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ImageNew;
	}
	
	public void mergePic(){
		 try {
		      // 读取第一张图片
		      File fileOne = new File("E:/temp/img/first.jpg");
		      BufferedImage ImageOne = ImageIO.read(fileOne);
		      int width = ImageOne.getWidth();
		      // 图片宽度
		      int height = ImageOne.getHeight();
		      // 图片高度
		      // 从图片中读取RGB
		      int[] ImageArrayOne = new int[width * height];
		      ImageArrayOne = ImageOne.getRGB(0, 0, width, height, ImageArrayOne,
		      0, width);
		      // 对第二张图片做相同的处理
		      File fileTwo = new File("E:/temp/first.jpg");
		      BufferedImage ImageTwo = ImageIO.read(fileTwo);
		      int[] ImageArrayTwo = new int[width * height];
		      ImageArrayTwo = ImageTwo.getRGB(0, 0, width, height, ImageArrayTwo,
		      0, width);
		      // 生成新图片
		      // BufferedImage ImageNew = new BufferedImage(width * 2, height,
		      // BufferedImage.TYPE_INT_RGB);
		      BufferedImage ImageNew = new BufferedImage(width*2, height*2,
		      BufferedImage.TYPE_INT_RGB);
		      ImageNew.setRGB(0, 0, width, height, ImageArrayOne, 0, width);
		      // 设置左半部分的RGB
		      ImageNew.setRGB(width, 0, width, height, ImageArrayTwo, 0, width);// 设置右半部分的RGB
		      // ImageNew.setRGB(0, height, width, ImageOne.getHeight()+ImageTwo.getHeight(), ImageArrayTwo, 0, width);// 设置右半部分的RGB
		      //设置下部分的RGB
		      //ImageNew.setRGB(0, height, width, height, ImageArrayTwo, 0, width);
		      // 设置右半部分的RGB
		      File outFile = new File("E:/temp/third.jpg");
		      ImageIO.write(ImageNew, "png", outFile);
		      // 写图片
		    }
		    catch (Exception e) {
		      e.printStackTrace();
		    }
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Test test = new Test();
		List<String>list = new ArrayList<String>();
		list.add("3");
		list.add("1");
		list.add("4");
		list.add("5");
		list.add("虎");
		list.add("龙");
		test.mergePicHr(list);
		
	}

}
