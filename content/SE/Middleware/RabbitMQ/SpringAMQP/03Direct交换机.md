Direct Exchange会将接收到的消息根据规则路由到指定的Queue,因此称为定向路由。
- 每一个Queue都与Exchange设置一个BindingKey
- 发布者发送消息时，指定消息的RoutingKey
- Exchange将消息路由到BindingKey与消息RoutingKey一致的队列

![[03Direct交换机.png]]
#### 新建2个队列
![[03Direct交换机-1.png]]

#### 新建一个direct交换机
![[03Direct交换机-2.png]]

#### 使用Routing key，direct交换机绑定指定队列
![[03Direct交换机-3.png]]

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
    @RabbitListener(queues = "direct.queue1")
    public void listendirectQueue1(String msg) {
        System.out.println("消费者1接收到direct消息：【" + msg + "】");
    }

    @RabbitListener(queues = "direct.queue2")
    public void listendirectQueue2(String msg) {
        System.out.println("消费者2接收到direct消息：【" + msg + "】");
    }
}
```

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
    public void testDirectExchange() {
        // 交换机名称
        String exchangeName = "hmall.direct";
        // 消息
        String message = "红色警报，由于日本排放核污水，惊现哥斯拉!";
        rabbitTemplate.convertAndSend(exchangeName, "red", message);
    }
}
```

消费者收到的消息：
![[03Direct交换机-4.png]]

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
    public void testDirectExchange2() {
        // 交换机名称
        String exchangeName = "hmall.direct";
        // 消息
        String message = "蓝色警报，警报解除，哥斯拉是放的气球!";
        rabbitTemplate.convertAndSend(exchangeName, "blue", message);
    }
}
```

消费者收到的消息：
![[03Direct交换机-5.png]]

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
    public void testDirectExchange3() {
        // 交换机名称
        String exchangeName = "hmall.direct";
        // 消息
        String message = "黄色警报，警报暂除，哥斯拉暂没出现!";
        rabbitTemplate.convertAndSend(exchangeName, "yellow", message);
    }
}
```

![[03Direct交换机-6.png]]