
aws s3 cp . s3://%1/  --recursive --exclude "*" --include "*.html" 
aws s3 cp styles.css s3://%1/  
aws s3 cp menu.js s3://%1/  
