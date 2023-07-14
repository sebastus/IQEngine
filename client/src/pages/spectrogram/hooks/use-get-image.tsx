import { fftToRGB } from '@/utils/selector';
import { colMaps } from '@/utils/colormap';
import { useEffect, useState } from 'react';

export const useGetImage = (totalFftData, fftSize, magnitudeMin, magnitudeMax, colmap) => {
  const [image, setImage] = useState<ImageBitmap>(null);
  const [imageData, setImageData] = useState<ImageData>(null);

  useEffect(() => {
    const rgbData = fftToRGB(totalFftData, fftSize, magnitudeMin, magnitudeMax, colMaps[colmap]);
    let num_final_ffts = totalFftData.length / fftSize;
    const newImageData = new ImageData(rgbData, fftSize, num_final_ffts);
    setImageData(newImageData);

    createImageBitmap(newImageData).then((imageBitmap) => {
      setImage(imageBitmap);
    });

    console.log(
      'size of totalFftData:',
      totalFftData.length,
      'fftSize:',
      fftSize,
      ', magnitudeMin:',
      magnitudeMin,
      ', magnitudeMax:',
      magnitudeMax,
      ', num_final_ffts:',
      num_final_ffts
    );
  }, [totalFftData, fftSize, magnitudeMin, magnitudeMax, colmap]);

  return { imageData, image };
};
