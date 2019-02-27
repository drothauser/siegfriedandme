
aws s3 cp . s3://siegfriedandme.%1/  --recursive --exclude "*" --include "*.html" 
aws s3 cp . s3://siegfriedandme.%1/  --recursive --exclude "*" --include "*.js" 
aws s3 cp . s3://siegfriedandme.%1/  --recursive --exclude "*" --include "*.css" 
aws s3 cp . s3://siegfriedandme.%1/  --recursive --exclude "*" --include "videos/*.mp4" 
aws s3 cp . s3://siegfriedandme.%1/  --recursive --exclude "*" --include "images/*.jpg" 
