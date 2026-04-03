真正生产环境都会经过exchange来发送消息，而不是直接发送到队列，交换机的类型有以下三种：
- Fanout:广播
- Direct:定向
- Topic:话题

Fanout Exchange会将接收到的消息广播到每一个跟其绑定的queue,所以也叫广播模式
![[02Fanout交换机.png]]

#### 新建2个队列
![[02Fanout交换机-2.png]]

#### 新建1个fanout交换机
![[02Fanout交换机-3.png]]

#### fanout交换机绑定2个交换机
![[02Fanout交换机-4.png]]

#### SpringAmqpTest
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
    public void testFanoutExchange() {
        // 交换机名称
        String exchangeName = "hmall.fanout";
        // 消息
        String message = "hello, everyone!";
        rabbitTemplate.convertAndSend(exchangeName, "", message);
    }
}

```

![[02Fanout交换机-5.png]]


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
    @RabbitListener(queues = "fanout.queue1")
    public void listenFanoutQueue1(String msg) {
        System.out.println("消费者1接收到Fanout消息：【" + msg + "】");
    }

    @RabbitListener(queues = "fanout.queue2")
    public void listenFanoutQueue2(String msg) {
        System.out.println("消费者2接收到Fanout消息：【" + msg + "】");
    }
}
```

![[02Fanout交换机-6.png]]

![[02Fanout交换机-7.png]]