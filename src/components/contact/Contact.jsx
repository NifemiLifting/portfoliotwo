import React from 'react';
import './contact.css';
import TypingEffect from './TypingEffect';
import Logo from '../../images/logob.png';


const Contact = () => {
  return (
    <div className='ovo__contact gradient__bg' id='blog'>
      <div className='gradient__two section__padding'>
      <div className='ovo__contact-text'>
        <h1>
        <TypingEffect words={['Let\'s ', "get ", 'to ', 'work.']} />
        </h1>
        <h2>Contact me.</h2>
      </div>
      <div className='ovo__contact-buttons'>
        <div className='ovo__contact-btn'>
          <p><a href='mailto:oejatto@mun.ca' target='_blank' rel='noopener noreferrer'>Send me a mail</a></p>
        </div>
        <div className='ovo__contact-btn'>
          <p><a href='https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=fe51a079b3&attid=0.1&permmsgid=msg-f:1773406024765861444&th=189c676234b4ee44&view=att&disp=inline&realattid=189c675d603e0f1bf3c1&sadnir=1&saddbat=ANGjdJ8d2SGVA6MP6U-YuJGj9E9XBVyljmAz87WMX-G8bD6P_Zt5xS3CSt9a3V94AULYb1rK8KMc8LB-GGSs5Gpbsc6jsuX3Jfej1X5HIS46lwJnwu1Wf-gzfxzdPqdlJUqYuMgC4f0TtteWW-j6jqC-HW6gbLKZvGzgSFuhEZevHgOndspXLuBodASlhydosdgXCfLgvFYY72L2OFsRiITXFlYumvppgEzwkJTZzeVgUjuMehRyilWHCYFUgLH4UYoE4tUwBBCxcTL_VQxC3nlYLwRs2OJrZ6i-ObtQv5E5FVzVVNj94RCKCNYQAp5I0OxHsalTEDk5In3H63jEKIOdZe7yyZB31ff7ysiT4vugluBsmg8k_-PIxLwCVdcSAA7S4X2Z4koELCa3PBRXbwjMqdFPByZJgqIeGFj4EUFlslvMYioVONowtSHqYQzBleRhCFWTmkc2uyBy4wjXKV2bEVUBM-FdWoj-vMyBf3IwqpM-KwhY6CTJQIyuImLsvRMDioqBs5hTMqT26y1Jh2YK_51g430LKYmCnj_6BR9wmFZ8irEdaVGqgcnV-kd0ZYCSmgjgX6qxY7k8oeg0RCwm376XN3r-GRu92SC697lxv8eLJoqmu8XxbrU4etcvtQj8baMvOcHjAb5CvcqHzA30VlusWSKZwjD1wFeCcbITG4K5emw7WwnjwZkZoukrq0NvNNf0-krhN9U0zb1vi5FnqsHSoPkZBRLwfFFzrZRlvkPyd-1MbV0myQb7998Jtx0NSAhm8wolDT2TPpVh8Xp9r7u1Ql9haPVmYKzQjfLtTKeZriPSi4jcheriHRbJP5-Y4qLbVChkFwC_I9UC5LqB8sIfCZuo3r7v0_MMXz7wqBmr4ow1TpVZ_GN9lYJlbEuO9c3UagGgeSbsmF1knzbz7Z_OnKTZVccULz-tOwSh7ODWpx_ww6nEDKr26WpH6Ih1VbZcfchy-qsxz6SBeWPUl_9yFHtWfQN9s7iRbRMbN0W6WwNVTQX3SF33PWzSVzM2iO_kBTTif5eBMxfVt0o0Zaa0Au2qZYOIf-jvJA' target='_blank' rel='noopener noreferrer'>Get my resume</a></p>
        </div>
      </div>
      <div className='ovo__contact-links'>
      <div className='ovo__contact-link'>
          <p><a href='https://www.linkedin.com/in/ovo-jatto-e-i-t-/' target='_blank' rel='noopener noreferrer'>Linkedin</a></p>
        </div>
      </div>
      <div className='ovo__logo'>
        <img src= {Logo} style={{height:'50px'}}/>
      </div>
      </div>
      
      <div className='footer'>
        <p>2023 Lifting's designs. All rights reserved</p>
      </div>
    </div>
  )
}

export default Contact;
