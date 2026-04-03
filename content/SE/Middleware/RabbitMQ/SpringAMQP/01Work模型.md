-  多个消费者绑定到一个队列，可以加快消息处理速度
- 同一条消息只会被一个消费者处理
- 通过设置prefetch来控制消费者预取的消息数量，处理完一条再处理下一条，实现能者多劳

#### 配置consumer模块的application.yml
```yml
logging:
  pattern:
    dateformat: MM-dd HH:mm:ss:SSS
spring:
  rabbitmq:
    host: 192.168.17.125
    port: 5672
    virtual-host: /hmall
    username: hmall
    password: 123
    listener:
      simple:
        prefetch: 1  #每次只能获取一条消息，处理完成才能获取下一个消息

```

>如果 `prefetch` 值很大（比如默认 250），消费者1启动后会一次性预取所有消息，消费者2还没反应过来消息就被抢光了。

#### SpringAmqpTest
>然后在`publisher`服务中编写测试类`SpringAmqpTest`，并利用`RabbitTemplate`实现消息发送
```java
package com.itheima.publisher;

import org.junit.jupiter.api.Test;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class SpringAmqpTest {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Test
    public void testWorkQueue() throws InterruptedException {
        String queueName = "work.queue";
        for (int i = 0; i < 50; i++) {
            String  message = "hello, worker, message_" + i;
            rabbitTemplate.convertAndSend(queueName, message);
            Thread. sleep(20);
        }
    }
}
```

![[01Work模型.png]]
#### SpringRabbitListener
```java
package com.itheima.consumer.listeners;


import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class MqListener {
    // 利用RabbitListener来声明要监听的队列信息
    // 将来一旦监听的队列中有了消息，就会推送给当前服务，调用当前方法，处理消息。
    // 可以看到方法体中接收的就是消息体的内容

    @RabbitListener(queues = "work.queue")
    public void listenWorkQueue1(String msg) throws InterruptedException {
        System.out.println("消费者1接收到了work.queue的消息：【" + msg + "】");
        Thread.sleep(20);
    }

    @RabbitListener(queues = "work.queue")
    public void listenWorkQueue2(String msg) throws InterruptedException {
        System.err.println("消费者2接收到了work.queue的消息：【" + msg + "】"); //err红色打印
        Thread.sleep(200);
    }
}
```

![[01Work模型-1.png]]

![[01Work模型-2.png]]