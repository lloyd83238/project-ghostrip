function randomkeys($length)   
{   
   $pattern = '1234567890abcdefghijklmnopqrstuvwxyz   
               ABCDEFGHIJKLOMNOPQRSTUVWXYZ';  
    for($i=0;$i<$length;$i++)   
    {   
        $key = $pattern{mt_rand(0,35)};    //生成php隨機數   
    }   
    return $key; 
      
}
echo randomkeys(10);  